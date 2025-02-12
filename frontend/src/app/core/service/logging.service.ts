import {
  inject,
  Injectable,
  isDevMode,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment';
import {
  retry,
  switchMap,
  Subject,
  Subscription,
  bufferTime,
  filter,
  Observable,
  tap,
  catchError,
  throwError,
  lastValueFrom,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoggingService implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly isServer = isPlatformServer(this.platformId);
  private pendingLogs: LogEntry[] = [];
  private MAX_BUFFER_SIZE = 1000;

  private logQueue = new Subject<LogEntry>();
  private queueSubscription!: Subscription;
  private readonly MAX_RETRIES = 3;
  private readonly LOG_ENDPOINT = `${environment.apiUrl}/logs`;

  constructor() {
    this.setupQueueProcessing();
  }

  private setupQueueProcessing() {
    this.queueSubscription = this.logQueue
      .pipe(
        bufferTime(1000),
        filter((entries) => entries.length > 0),
        tap((entries) => (this.pendingLogs = entries)),
        switchMap((entriesBatch) =>
          this.sendToServer(entriesBatch).pipe(
            tap(() => (this.pendingLogs = [])),
            catchError((error) => {
              this.handleQueueError(error);
              return throwError(() => error);
            })
          )
        )
      )
      .subscribe();
  }

  debug(message: string, context?: any): void {
    if (isDevMode()) {
      this.log('debug', message, context);
    }
  }

  info(message: string, context?: any): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: any): void {
    this.log('warn', message, context);
  }

  error(error: Error | HttpErrorResponse | string, context?: LogContext): void {
    //const message = error instanceof Error ? error.message : error;

    const message = typeof error === 'string' ? error : error.message;
    const stack = error instanceof Error ? error.stack : undefined;

    this.log('error', message, {
      ...context,
      stack,
      originalError: error,
    });
  }

  private log(
    level: LogLevel,
    message: string | HttpErrorResponse,
    context?: any
  ): void {
    if (this.pendingLogs.length >= this.MAX_BUFFER_SIZE) {
      this.handleQueueError(new Error('Log buffer overflow'));
      return;
    }

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: this.sanitizeContext(context),
      environment: {
        production: environment.production,
        version: environment.version,
        userAgent: this.isBrowser ? navigator.userAgent : 'server',
      },
    };

    if (isDevMode()) {
      this.consoleLog(level, entry);
    }

    this.logQueue.next(entry);
    this.pendingLogs.push(entry);
  }

  private sanitizeContext(context: any): any {
    if (context && context.headers?.authorization) {
      context.headers.authorization = '***REDACTED***';
    }
    return context;
  }

  private consoleLog(level: LogLevel, entry: LogEntry): void {
    const styles = {
      debug: 'color: #666; background: #eee',
      info: 'color: #2196F3;',
      warn: 'color: #FF9800;',
      error: 'color: #F44336; font-weight: bold',
    };

    console.log(
      `%c[${entry.timestamp}] ${level.toUpperCase()}: ${entry.message}`,
      styles[level],
      entry.context
    );
  }

  private sendToServer(entries: LogEntry[]): Observable<void> {
    return this.http
      .post<void>(this.LOG_ENDPOINT, {
        logs: entries, // Enviar array completo
        timestamp: new Date().toISOString(),
        appVersion: environment.version,
      })
      .pipe(retry(this.MAX_RETRIES));
  }

  private handleQueueError(error: any): void {
    console.error('Logging queue error:', error);
    if (this.isBrowser) {
      try {
        const failedLogs = JSON.parse(
          localStorage.getItem('failedLogs') || '[]'
        );
        failedLogs.push(...this.pendingLogs);
        localStorage.setItem('failedLogs', JSON.stringify(failedLogs));
        this.pendingLogs = [];
      } catch (e) {
        console.error('LocalStorage fallback failed:', e);
      }
    }
  }

  async retryFailedLogs(): Promise<void> {
    if (!this.isBrowser) return;

    try {
      const failedLogs = JSON.parse(localStorage.getItem('failedLogs') || '[]');
      if (failedLogs.length > 0) {
        await lastValueFrom(
          this.http.post(`${this.LOG_ENDPOINT}/retry`, failedLogs)
        );
        localStorage.removeItem('failedLogs');
      }
    } catch (error: any) {
      throw new Error(`Log retry failed: ${error.message}`);
    }
  }

  ngOnDestroy() {
    this.queueSubscription.unsubscribe();
  }
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string | HttpErrorResponse;
  context?: any;
  environment: {
    production: boolean;
    version: string;
    userAgent: string;
  };
}

export interface LogContext {
  feature?: string;
  component?: string;
  user?: string;
  [key: string]: any;
}

import { Injectable } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { error } from 'console';

@Injectable()
export class LoggingInterceptor {
  constructor(private logger: LoggingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    const method = request.method;
    const url = request.url;

    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            this.logSuccess(method, url, event.status, startTime);
          }
        },
        error: (error) => {
          this.logError(method, url, error, startTime);
        },
      })
    );
  }

  private logSuccess(
    method: string,
    url: string,
    status: number,
    startTime: number
  ): void {
    const duration = Date.now() - startTime;
    this.logger.info('Http Request', {
      method,
      url,
      status,
      duration: `${duration}ms`,
    });
  }

  private logError(
    method: string,
    url: string,
    error: HttpErrorResponse,
    startTime: number
  ): void {
    const duration = Date.now() - startTime;

    this.logger.error(`HTTP Error ${error.status}`, {
      method,
      url,
      status: error.status,
      duration: `${duration}ms`,
      error: error.message,
    });
  }
}

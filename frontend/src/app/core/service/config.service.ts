import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, of, retry, timeout } from 'rxjs';
import { environment } from '../../environments/environment';
import { time } from 'console';
import { LoggingService } from './logging.service';

interface AppConfig {
  apiUrl: string;
  googleClientId: string;
  enableAnalytics: boolean;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);
  private logger = inject(LoggingService);
  private config: AppConfig = environment;
  private readonly CONFIG_PATH = '/assets/config.json';
  private readonly TIMEOUT_MS = 5000;
  private readonly MAX_RETRIES = 2;

  async loadConfig(): Promise<void> {
    if (environment.production) {
      try {
        const config$ = this.http.get<AppConfig>(this.CONFIG_PATH).pipe(
          timeout(this.TIMEOUT_MS),
          retry(this.MAX_RETRIES),
          catchError((error) => {
            this.logger.error(new Error('Failed to load external config'), {
              feature: 'config-loader',
              retries: this.MAX_RETRIES,
              endpoint: this.CONFIG_PATH,
              environment: environment.production ? 'prod' : 'dev',
            });
            return of(this.config);
          })
        );
        const data = await lastValueFrom(config$);
        this.config = this.mergeConfigs(data);
      } catch (error) {
        this.logger.error(new Error('Critical config loading failure'), {
          feature: 'config-initialization',
          severity: 'critical',
        });
        throw error;
      }
    }
  }

  private mergeConfigs(externalConfig: AppConfig): AppConfig {
    return {
      ...environment,
      ...externalConfig,
      ...this.replaceEnvVariables(externalConfig),
    };
  }

  private replaceEnvVariables(config: AppConfig): AppConfig {
    const env = this.getEnvironmentVariables();

    return Object.entries(config).reduce((acc, [key, value]) => {
      acc[key] = this.processValue(value, env);
      return acc;
    }, {} as AppConfig);
  }

  private processValue(value: any, env: any): any {
    if (typeof value === 'string') {
      return value.replace(/\${(.*?)}/g, (_, envVar) => env[envVar] || value);
    }
    return value;
  }

  private getEnvironmentVariables(): any {
    // Obtener variables de diferentes fuentes
    return {
      ...process.env, // Para SSR/Node.js
      ...(typeof window !== 'undefined' ? (window as any).__env : {}), // Para cliente
    };
  }

  get(key: string): any {
    return this.config[key];
  }
}

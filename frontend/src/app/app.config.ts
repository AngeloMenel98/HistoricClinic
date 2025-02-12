import {
  APP_INITIALIZER,
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
  provideEnvironmentInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfigService } from './core/service/config.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoggingService } from './core/service/logging.service';
import { environment } from './environments/environment';
import { provideOAuthClient } from 'angular-oauth2-oidc';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentInitializer(() => {
      const logger = inject(LoggingService);
      const config = inject(ConfigService);

      logger.info('Application initialized');

      if (environment.logging.enabled) {
        logger.retryFailedLogs();
      }
      config.loadConfig();
    }),
    provideOAuthClient(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync('noop'),
  ],
};

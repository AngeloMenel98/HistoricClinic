import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { LogContext, LoggingService } from './logging.service';
import { authConfig } from '../config/auth.config';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private oauth = inject(OAuthService);
  private router = inject(Router);
  private logger = inject(LoggingService);

  constructor() {
    this.configOAuth();
  }

  private configOAuth() {
    this.oauth.configure(authConfig);
    this.oauth.setupAutomaticSilentRefresh();

    this.oauth.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe(() => this.handleNewToken());
  }

  async initAuth(): Promise<boolean> {
    try {
      await this.oauth.loadDiscoveryDocumentAndTryLogin();

      if (this.oauth.hasValidAccessToken()) {
        return true;
      }

      return await this.handleCodeFlow();
    } catch (error: unknown) {
      this.logError('Auth initialization failed', error);
      return false;
    }
  }

  login() {
    this.oauth.initCodeFlow();
  }

  logout() {
    this.oauth.logOut();
    this.router.navigate(['/']);
  }

  get accessToken() {
    return this.oauth.getAccessToken();
  }

  get userProfile() {
    return this.oauth.getIdentityClaims();
  }

  private handleNewToken() {
    this.logger.info('New Access token received');
  }

  private async handleCodeFlow(): Promise<boolean> {
    try {
      await this.oauth.tryLoginCodeFlow();
      return this.oauth.hasValidAccessToken();
    } catch (error) {
      this.logError('Code flow failed', error);
      return false;
    }
  }

  private logError(message: string, error: unknown): void {
    const errorContext: LogContext = {
      error:
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : error,
    };

    this.logger.error(message, errorContext);
  }
}

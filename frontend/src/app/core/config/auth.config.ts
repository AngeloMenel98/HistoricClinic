import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthConfigService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getConfig(): AuthConfig {
    return {
      issuer: 'https://accounts.google.com',
      redirectUri: this.getRedirectUri(),
      clientId: environment.googleClientId,
      responseType: 'code',
      scope: 'openid profile email offline_access',
      useSilentRefresh: false,
      sessionChecksEnabled: true,
      timeoutFactor: 0.8,
      tokenEndpoint: 'my-api.com/auth/token',
      userinfoEndpoint: 'my-api.com/auth/userinfo',
      showDebugInformation: !environment.production,
      strictDiscoveryDocumentValidation: false,
    };
  }

  private getRedirectUri(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.origin + '/callback';
    }
    return environment.apiUrl + '/callback'; // Fallback para SSR
  }
}

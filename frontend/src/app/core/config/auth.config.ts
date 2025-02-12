import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/callback',
  clientId: environment.googleClientId,
  responseType: 'code',
  scope: 'openid profile emial offline_access',
  useSilentRefresh: false,
  sessionChecksEnabled: true,
  timeoutFactor: 0.8,
  tokenEndpoint: 'my-api.com/auth/token',
  userinfoEndpoint: 'my-api.com/auth/userinfo',
  showDebugInformation: !environment.production,
  strictDiscoveryDocumentValidation: false,
};

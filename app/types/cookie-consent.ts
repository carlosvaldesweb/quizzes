export interface CookieConsentPreferences {
  essential: true;
  functional: boolean;
  analytics: boolean;
}

export interface CookieConsentState {
  consented: boolean;
  preferences: CookieConsentPreferences;
  timestamp: string;
}

import type { CookieConsentPreferences, CookieConsentState } from "~/types/cookie-consent";

export function useCookieConsent() {
  const consentCookie = useCookie<CookieConsentState | null>("cookie_consent", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    default: () => null,
  });

  const hasConsented = computed(() => consentCookie.value?.consented === true);

  const preferences = computed<CookieConsentPreferences>(() => ({
    essential: true,
    functional: consentCookie.value?.preferences?.functional ?? false,
    analytics: consentCookie.value?.preferences?.analytics ?? false,
  }));

  const showBanner = computed(() => !hasConsented.value);

  function acceptAll() {
    consentCookie.value = {
      consented: true,
      preferences: { essential: true, functional: true, analytics: true },
      timestamp: new Date().toISOString(),
    };
  }

  function rejectNonEssential() {
    consentCookie.value = {
      consented: true,
      preferences: { essential: true, functional: false, analytics: false },
      timestamp: new Date().toISOString(),
    };
  }

  function savePreferences(prefs: Partial<CookieConsentPreferences>) {
    consentCookie.value = {
      consented: true,
      preferences: {
        essential: true,
        functional: prefs.functional ?? false,
        analytics: prefs.analytics ?? false,
      },
      timestamp: new Date().toISOString(),
    };
  }

  function resetConsent() {
    consentCookie.value = null;
  }

  return {
    hasConsented,
    preferences,
    showBanner,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    resetConsent,
  };
}

// Google Ads call conversion tracking — Jususervisas
// Conversion action: "Calls from website" (AW-17231757934/odZrCMnh9tUcEO6E35hA)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function fireCallConversion(): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17231757934/odZrCMnh9tUcEO6E35hA',
      value: 1.0,
      currency: 'EUR',
    });
  }
}

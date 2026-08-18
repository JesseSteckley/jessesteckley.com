export type AnalyticsEvent = "discovery_click" | "email_copy";

declare global {
  interface Window {
    plausible?: (event: string) => void;
  }
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.plausible?.(event);
}

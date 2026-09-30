import type { AnalyticsProps } from '@vercel/analytics';
type BeforeSendEvent = Parameters<NonNullable<AnalyticsProps['beforeSend']>>[0];

const STORAGE_KEY = 'internal-analytics-opt-out';
let sessionExcluded = false;

export function isAnalyticsExcluded(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionExcluded || window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return sessionExcluded;
  }
}

/** Vercel calls this for both client page views and custom events. */
export function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  if (typeof window === 'undefined') return event;
  const isSetup = (pathname: string) => /^\/analytics-opt-out(?:\/|$)/.test(pathname);
  if (isSetup(window.location.pathname) || isAnalyticsExcluded()) return null;
  try {
    if (isSetup(new URL(event.url, window.location.origin).pathname)) return null;
  } catch { /* Preserve ordinary events if the SDK supplies an unexpected URL. */ }
  return event;
}

export function setAnalyticsExcluded(excluded: boolean): 'saved' | 'session-only' | 'failed' {
  if (typeof window === 'undefined') return 'failed';
  // Exclude immediately, even if this browser refuses persistent storage.
  if (excluded) sessionExcluded = true;
  try {
    if (excluded) window.localStorage.setItem(STORAGE_KEY, '1');
    else window.localStorage.removeItem(STORAGE_KEY);
    if ((window.localStorage.getItem(STORAGE_KEY) === '1') !== excluded) throw new Error('Preference not saved');
    sessionExcluded = false;
    return 'saved';
  } catch {
    return excluded ? 'session-only' : 'failed';
  }
}

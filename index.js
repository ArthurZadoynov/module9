import * as Sentry from '@sentry/browser';
// import { Integrations } from '@sentry/tracing';

Sentry.init({

  dsn: 'https://0e2fbc0fb8d8bff2e1152b47858f357a@o4507758824718336.ingest.de.sentry.io/4507759348154448',

  integrations: [
    // new Integrations.BrowserTracing(),
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],

  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

});

myUndefinedFunction();

var x = 5;
const y = '2';
console.log(x, y);

import { provideHttpClient } from "@angular/common/http";
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, Provider, inject } from "@angular/core";
import { Route, provideRouter } from "@angular/router";
import { CORE_GUARD } from "../injection-tokens/core-guard.token";
import { PREFERENCE_URL } from "../injection-tokens/preference-url.token";
import { SettingsService } from "../services";

const APP_ROUTES: Route[] = [{
  path: 'lazy',
  loadComponent: () => import('../../lazy-loaded/lazy-loaded.component')
    .then(mod => mod.LazyLoadedComponent)
}];

export function providerCore(): (EnvironmentProviders | Provider)[] {
  return [
    provideHttpClient(),
    provideRouter(APP_ROUTES),
    {
      provide: CORE_GUARD,
      useValue: 'CORE_GUARD'
    },
    {
      provide: PREFERENCE_URL,
      useValue: 'https://gist.githubusercontent.com/railsstudent/7c8d4b6b6158812e02ca8efcc5259127/raw/2a2e44705130ed4042e7b3f9bfbeb344dffaa580/preferences.json',
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const coreGuard = inject(CORE_GUARD, {
          skipSelf: true,
          optional: true,
        });

        if (coreGuard) {
          throw new TypeError('providerCore cannot load more than once.');
        }

        inject(SettingsService).load();
      }
    }
  ];
}

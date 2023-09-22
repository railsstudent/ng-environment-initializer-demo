import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, Provider, inject } from "@angular/core";
import { CORE_GUARD } from "../injection-tokens/core-guard.token";
import { PREFERENCE_URL } from "../injection-tokens/preference-url.token";
import { SettingsService } from "../services";

export function providerCore(): (EnvironmentProviders | Provider)[] {
  console.log('providerCore called');

  return [
    {
      provide: CORE_GUARD,
      useValue: 'CORE_GUARD',
    },
    {
      provide: PREFERENCE_URL,
      useValue: 'https://gist.githubusercontent.com/railsstudent/7c8d4b6b6158812e02ca8efcc5259127/raw/3190954f22a439a9df00ed7377daa5a05a3c32b9/preferences.json',
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const coreGuard = inject(CORE_GUARD, {
          skipSelf: true,
          optional: true,
        });

        console.log('coreGuard', coreGuard);

        if (coreGuard) {
          throw new TypeError('providerCore cannot load more than once.');
        }

        inject(SettingsService).load();
      }
    }
  ];
}

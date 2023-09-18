import { ApplicationConfig } from '@angular/core';
import { providerCore } from './core';

export const appConfig: ApplicationConfig = {
  providers: [providerCore()]
};

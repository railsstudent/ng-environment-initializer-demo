import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [{
  path: 'lazy',
  loadComponent: () => import('./users/lazy-loaded/lazy-loaded.component')
    .then(mod => mod.LazyLoadedComponent)
}];

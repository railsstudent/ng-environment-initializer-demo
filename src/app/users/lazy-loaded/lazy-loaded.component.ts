import { Component, Injector, inject } from '@angular/core';
import { providerCore } from '../../core';

@Component({
  selector: 'app-lazy-loaded',
  standalone: true,
  template: '<p>lazy-loaded works!</p>',
})
export class LazyLoadedComponent {
  parentInjector = inject(Injector);

  lazyLoadedInjector = Injector.create({
    providers: [providerCore()],
    parent: this.parentInjector
  });
}

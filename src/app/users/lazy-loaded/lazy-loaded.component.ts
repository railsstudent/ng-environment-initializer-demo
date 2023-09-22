import { Component } from '@angular/core';
import { providerCore } from '../../core';

@Component({
  selector: 'app-lazy-loaded',
  standalone: true,
  template: '<p>lazy-loaded works!</p>',
  providers: [providerCore()]
})
export class LazyLoadedComponent {}

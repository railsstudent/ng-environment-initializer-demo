import { Component } from '@angular/core';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserProfileComponent],
  template: '<app-user-profile></app-user-profile>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {}

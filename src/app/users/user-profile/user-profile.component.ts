import { AsyncPipe, NgIf, NgStyle } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SettingsService } from '../../core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgStyle, RouterLinkActive, RouterLink],
  template: `
    <div>
      <div class="banner" [style]="topSignal()">
        My banner
      </div>
      <div class="info" [style]="contentSignal()">
          <div class="row">
            <label for="name" [style]="labelSignal()">Name: </label>
            <span id="name" name="name" [style]="fontSignal()">Mary Doe</span>
          </div>
          <div class="row">
            <label for="gender" [style]="labelSignal()">Gender : </label>
            <span id="gender" name="gender" [style]="fontSignal()">Female</span>
          </div>
          <div class="row">
            <label for="languages" [style]="labelSignal()">Languages : </label>
            <span id="name" name="name" [style]="fontSignal()">Cantonese, English, Mandarin, Spanish</span>
          </div>
      </div>  
      <ul>
        <li>
          <a routerLink="/lazy" routerLinkActive="active">Lazy load standalone component and providerCore throws error</a>
        </li>
      </ul>
    </div>  
  `,
  styles: [`
    :host {
      display: block;
    }

    .banner, .info {
      padding: 1rem;
    }

    .row {
      margin-bottom: 0.5rem;
    }

    ul {
      margin-top: 1rem;
    }
  `],
})
export class UserProfileComponent {
  styles$ = inject(SettingsService).styles$;
  stylesSignal = toSignal(this.styles$);

  topSignal = computed(() => this.stylesSignal()?.top);
  contentSignal = computed(() => this.stylesSignal()?.content);
  labelSignal = computed(() => this.stylesSignal()?.label);
  fontSignal = computed(() => this.stylesSignal()?.font);
  
}
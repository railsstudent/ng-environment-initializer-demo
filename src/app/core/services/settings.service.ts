import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, map, Subject } from 'rxjs';
import { PREFERENCE_URL } from '../injection-tokens/preference-url.token';
import { PreferencesHolder, UserStyles } from '../interfaces/preferences.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly httpClient = inject(HttpClient);
  private readonly stylesSub = new Subject<UserStyles>();
  styles$ = this.stylesSub.asObservable();
  private url = inject(PREFERENCE_URL);

  private load$ = this.httpClient.get<PreferencesHolder>(this.url)
    .pipe(
      delay(800),
      map(({ preferences }) => preferences),
      takeUntilDestroyed(),
    );

  load() {
    this.load$.subscribe((styles) => {
      this.stylesSub.next(styles);
      console.log('Application styles are loaded sucessfully', styles);
    });
  }
}

import { Injectable } from '@angular/core';
import { SpeechService } from '@core/services/speech/speech.service';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  merge,
  Observable,
  share,
  startWith,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterCustomersStore {
  constructor(private _speechService: SpeechService) {}

  // Subject for Search Box
  public _listenClicksSubject$ = new Subject<string>();
  private _listenClicks$ = this._listenClicksSubject$.asObservable();

  get listenClicks$(): Observable<string> {
    return this._listenClicks$;
  }
  set listenClicks(value: string) {
    this._listenClicksSubject$.next(value);
  }

  // Subject for search Box placeholder
  private _placeholderSubject$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private _placeholder$: Observable<string> = this._placeholderSubject$
    .asObservable()
    .pipe(
      share(),
      startWith('home'),
      debounceTime(500),
      distinctUntilChanged(
        (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr),
      ),
    );

  get placeholder$(): Observable<string> {
    return this._placeholder$;
  }

  set placeholder(placeholder: string) {
    this._placeholderSubject$.next(placeholder);
  }

  // Subject for Search Box
  private _filterCustomersTypedKeywordsSubject$ = new BehaviorSubject<string>(
    '',
  );
  private _filterCustomersTypedKeywords$ =
    this._filterCustomersTypedKeywordsSubject$.asObservable().pipe(
      share(),
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(
        (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr),
      ),
    );

  // get filterCustomersTypedKeywords$(): Observable<string> {
  //   return this._filterCustomersTypedKeywords$;
  // }

  set filterCustomersTypedKeywords(value: string) {
    this._filterCustomersTypedKeywordsSubject$.next(value);
  }

  private _filterCustomersKeywords$ = merge(
    this._speechService.spokenKeywords$,
    this._filterCustomersTypedKeywords$,
  );

  get filterCustomersKeywords$(): Observable<string> {
    return this._filterCustomersKeywords$;
  }
}

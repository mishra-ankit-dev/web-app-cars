import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpeechService } from '@core/services/speech/speech.service';
import { Observable, Subject } from 'rxjs';
import { share, takeUntil, tap } from 'rxjs/operators';
import { FilterCustomersStore } from './filter-customers.store';

@Component({
  selector: 'app-filter-customers',
  templateUrl: './filter-customers.component.html',
  styleUrls: ['./filter-customers.component.scss'],
})
export class FilterCustomersComponent implements OnInit, OnDestroy {
  constructor(
    private _speechService: SpeechService,
    private _filterCustomersStore: FilterCustomersStore,
  ) {}

  destroy$ = new Subject();
  @Input('width') width = 'w-24';

  ngOnInit(): void {
    this._filterCustomersStore.listenClicks$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this._speechService.listen()),
        share(),
      )
      .subscribe();
  }

  get placeholder$(): Observable<string> {
    return this._filterCustomersStore.placeholder$;
  }

  set filterCustomersTypedKeywords(value: string) {
    this._filterCustomersStore.filterCustomersTypedKeywords = value;
  }

  get filterCustomersKeywords$(): Observable<string> {
    return this._filterCustomersStore.filterCustomersKeywords$;
  }

  get listenClicks$(): Observable<string> {
    return this._filterCustomersStore.listenClicks$;
  }

  set listenClicks(value: string) {
    this._filterCustomersStore.listenClicks = value;
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}

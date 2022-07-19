import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpeechService } from '@core/services/speech/speech.service';
import { Observable, Subject } from 'rxjs';
import { share, takeUntil, tap } from 'rxjs/operators';
import { FilterCarsStore } from './filter-cars.store';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss'],
})
export class FilterCarsComponent implements OnInit, OnDestroy {
  constructor(
    private _speechService: SpeechService,
    private _filterCarsStore: FilterCarsStore,
  ) {}

  destroy$ = new Subject();
  @Input('width') width = 'w-24';

  ngOnInit(): void {
    this._filterCarsStore.listenClicks$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this._speechService.listen()),
        share(),
      )
      .subscribe();
  }

  get placeholder$(): Observable<string> {
    return this._filterCarsStore.placeholder$;
  }

  set filterCarsTypedKeywords(value: string) {
    this._filterCarsStore.filterCarsTypedKeywords = value;
  }

  get filterCarsKeywords$(): Observable<string> {
    return this._filterCarsStore.filterCarsKeywords$;
  }

  get listenClicks$(): Observable<string> {
    return this._filterCarsStore.listenClicks$;
  }

  set listenClicks(value: string) {
    this._filterCarsStore.listenClicks = value;
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}

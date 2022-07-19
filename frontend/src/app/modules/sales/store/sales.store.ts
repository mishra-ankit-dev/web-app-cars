import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesStore {
  // CURRENT/SELECTED SPECIFICATION SHARING ACCROSS COMPONENTS
  private _saleSubject: BehaviorSubject<ISale> = new BehaviorSubject<ISale>(
    {} as ISale,
  );

  get sale$(): Observable<ISale> {
    return this._saleSubject.asObservable();
  }

  set sale(sale: ISale) {
    this._saleSubject.next(sale);
  }

  // CURRENT/SELECTED SPECIFICATION FILTER KEY SHARING ACCROSS COMPONENTS
  private _saleFilterKeySubject: BehaviorSubject<SalesFilterType> =
    new BehaviorSubject<SalesFilterType>('SalesID');

  get saleFilterKey$(): Observable<SalesFilterType> {
    return this._saleFilterKeySubject.asObservable();
  }

  set saleFilterKey(saleFilterKey: SalesFilterType) {
    this._saleFilterKeySubject.next(saleFilterKey);
  }
}

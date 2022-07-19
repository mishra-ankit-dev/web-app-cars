import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsStore {
  // CURRENT/SELECTED SPECIFICATION SHARING ACCROSS COMPONENTS
  private _carSubject: BehaviorSubject<ISale> = new BehaviorSubject<ISale>(
    {} as ISale,
  );

  get car$(): Observable<ISale> {
    return this._carSubject.asObservable();
  }

  set car(car: ISale) {
    this._carSubject.next(car);
  }

  // CURRENT/SELECTED SPECIFICATION FILTER KEY SHARING ACCROSS COMPONENTS
  private _carFilterKeySubject: BehaviorSubject<CarsFilterType> =
    new BehaviorSubject<CarsFilterType>('CarID');

  get carFilterKey$(): Observable<CarsFilterType> {
    return this._carFilterKeySubject.asObservable();
  }

  set carFilterKey(carFilterKey: CarsFilterType) {
    this._carFilterKeySubject.next(carFilterKey);
  }
}

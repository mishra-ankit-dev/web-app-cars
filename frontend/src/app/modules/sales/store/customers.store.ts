import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersStore {
  // CURRENT/SELECTED SPECIFICATION SHARING ACCROSS COMPONENTS
  private _customerSubject: BehaviorSubject<ISale> = new BehaviorSubject<ISale>(
    {} as ISale,
  );

  get customer$(): Observable<ISale> {
    return this._customerSubject.asObservable();
  }

  set customer(customer: ISale) {
    this._customerSubject.next(customer);
  }

  // CURRENT/SELECTED SPECIFICATION FILTER KEY SHARING ACCROSS COMPONENTS
  private _customerFilterKeySubject: BehaviorSubject<CustomersFilterType> =
    new BehaviorSubject<CustomersFilterType>('CustomerID');

  get customerFilterKey$(): Observable<CustomersFilterType> {
    return this._customerFilterKeySubject.asObservable();
  }

  set customerFilterKey(customerFilterKey: CustomersFilterType) {
    this._customerFilterKeySubject.next(customerFilterKey);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_UTILS } from '@core/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private _http: HttpClient) {}

  private _CUSTOMERS_URL = `/${ENDPOINT_UTILS.config.base.home}/${ENDPOINT_UTILS.config.customer.root}/`;

  customers$ = (): Observable<ICustomer[]> =>
    this._http.get<ICustomer[]>(this._CUSTOMERS_URL);

  deleteSale$ = (id: number): Observable<ICustomer> =>
    this._http.delete<ICustomer>(`${this._CUSTOMERS_URL}${id}/`);
}

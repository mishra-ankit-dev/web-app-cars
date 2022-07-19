import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_UTILS } from '@core/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private _http: HttpClient) {}

  private _SALES_URL = `/${ENDPOINT_UTILS.config.base.home}/${ENDPOINT_UTILS.config.sale.root}/`;

  sales$ = (): Observable<ISale[]> => this._http.get<ISale[]>(this._SALES_URL);

  saleById$ = (id: number): Observable<ISale> =>
    this._http.get<ISale>(`${this._SALES_URL}${id}/`);

  CreateSale$ = (sale: ISale): Observable<ISale> =>
    this._http.post<ISale>(this._SALES_URL, sale);

  UpdateSale$ = (sale: ISale): Observable<ISale> =>
    this._http.patch<ISale>(`${this._SALES_URL}${sale.id}/`, sale);

  deleteSale$ = (id: number): Observable<ISale> =>
    this._http.delete<ISale>(`${this._SALES_URL}${id}/`);
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_UTILS } from '@core/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _http: HttpClient) {}

  private _CARS_URL = `/${ENDPOINT_UTILS.config.base.home}/${ENDPOINT_UTILS.config.car.root}/`;

  cars$ = (): Observable<ICar[]> => this._http.get<ICar[]>(this._CARS_URL);

  deleteSale$ = (id: number): Observable<ICar> =>
    this._http.delete<ICar>(`${this._CARS_URL}${id}/`);
}

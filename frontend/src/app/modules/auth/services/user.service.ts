import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_UTILS } from '@core/utils';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  private _USER_URL = `/${ENDPOINT_UTILS.config.base.home}/${ENDPOINT_UTILS.config.user.root}`;

  userById$ = (id: number): Observable<IUser> => {
    return this._http
      .get<IUser>(
        `${this._USER_URL}/${ENDPOINT_UTILS.config.user.detail}/${id}`,
      )
      .pipe(share());
  };

  allUsers$: Observable<IUser[]> = this._http
    .get<IUser[]>(`${this._USER_URL}/${ENDPOINT_UTILS.config.user.detail}`)
    .pipe(share());
}

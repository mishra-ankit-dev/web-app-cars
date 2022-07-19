import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe((source: Observable<HttpEvent<any>>) =>
        this.handleAuthErrors(source),
      );
  }

  handleAuthErrors(
    source: Observable<HttpEvent<any>>,
  ): Observable<HttpEvent<any>> {
    return source.pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.error.detail || error.statusText || 'Server Error');

        console.error(error);
        return throwError(error);
      }),
    );
  }
}

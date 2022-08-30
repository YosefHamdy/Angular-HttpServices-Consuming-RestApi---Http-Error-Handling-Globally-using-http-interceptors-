import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // global handling should configure this interceptor into app.module in providers and done ....
    return next.handle(request).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(err: any) {
    let errorMsg: string;
    // ErrorEvent "Source of error" possible or can be come from frontend or backend
    if (err.error instanceof ErrorEvent) {
      errorMsg = `Error: ${err.message}`;
    } else {
      errorMsg = this.getServerErrorMessage(err);
    }
    // rethrow the error to the component
    return throwError(errorMsg);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        console.log('Here is the errrr 404 404');
        return `Not Found:${error.message}`;
        // here return type possible to be "not found class" that you can create
        // or navigate to NotFound component
      }
      case 403: {
        return `Access Denied: ${error.message}`;
        // or navigate to Forbidden component
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
        // or .........
      }
      default: {
        return `Unknown Server Error`;
      }
    }
  }
}

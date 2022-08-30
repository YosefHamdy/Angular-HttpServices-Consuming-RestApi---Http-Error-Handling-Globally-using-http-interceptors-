import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// base service
export class DataService<T> {
  constructor(
    // make url injectable to pass it from other services
    @Inject(String) private configURL: string,
    private http: HttpClient
  ) {}
  // user
  get(): Observable<T> {
    return this.http.get<T>(this.configURL).pipe(
      // retry operator method executed when an failure in api happen so
      // before show error response will "try 3 times the process"
      retry(3),
      catchError(this.handleError)
    );
  }
  // userDetails
  getById(id: number): Observable<T> {
    return this.http.get<T>(this.configURL + `/${id}`).pipe(
      // retry operator method executed when an failure in api happen so
      // before show error response will "try 3 times the process"
      retry(3),
      catchError(this.handleError)
    );
  }
  post(model: T): Observable<T> {
    return this.http.post<T>(this.configURL, model).pipe(
      // retry operator method executed when an failure in api happen so
      // before show error response will "try 3 times the process"
      retry(3),
      catchError(this.handleError)
    );
  }
  put(id: number, model: T): Observable<T> {
    return this.http.put<T>(this.configURL + `/${id}`, model).pipe(
      // retry operator method executed when an failure in api happen so
      // before show error response will "try 3 times the process"
      retry(3),
      catchError(this.handleError)
    );
  }
  delete(id: number): Observable<T> {
    return this.http.delete<T>(this.configURL + `/${id}`).pipe(
      // retry operator method executed when an failure in api happen so
      // before show error response will "try 3 times the process"
      retry(3),
      catchError(this.handleError)
    );
  }

  /// handlig error in service then call it inside pipe in endpoints
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

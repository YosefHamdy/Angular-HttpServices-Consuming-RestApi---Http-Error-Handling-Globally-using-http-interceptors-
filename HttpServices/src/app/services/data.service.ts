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
    return this.http.get<T>(this.configURL);
  }
  // userDetails
  getById(id: number): Observable<T> {
    return this.http.get<T>(this.configURL + `/${id}`);
  }
  post(model: T): Observable<T> {
    return this.http.post<T>(this.configURL, model);
  }
  put(id: number, model: T): Observable<T> {
    return this.http.put<T>(this.configURL + `/${id}`, model);
  }
  delete(id: number): Observable<T> {
    return this.http.delete<T>(this.configURL + `/${id}`);
  }
}

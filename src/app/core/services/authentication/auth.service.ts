import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, take, tap } from 'rxjs/operators';
import { EMPTY, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #http = inject(HttpClient);
  #router = inject(Router);
  isAuthenticated = signal(false);

  #isLoading = signal(false);
  isLoading = this.#isLoading.asReadonly();

  #hasError = signal(false);
  hasError = this.#hasError.asReadonly();

  checkAuthStatus() {
    this.#isLoading.set(true);
    this.#hasError.set(false);

    return this.#http
      .get(`${environment.endpoints.auth}/profile`, { withCredentials: true })
      .pipe(
        take(1),
        tap((user) => {
          if (user) {
            this.isAuthenticated.set(true);
          }
        }),
        catchError(() => {
          this.isAuthenticated.set(false);
          this.#hasError.set(true);
          return EMPTY;
        }),
        finalize(() => this.#isLoading.set(false)),
      );
  }

  login(credentials: any): Observable<any> {
    this.#isLoading.set(true);
    this.#hasError.set(false);
    return this.#http
      .post(`${environment.endpoints.auth}/login`, credentials, {
        withCredentials: true,
      })
      .pipe(
        take(1),
        tap(() => this.isAuthenticated.set(true)),
        catchError((error) => {
          this.isAuthenticated.set(false);
          this.#hasError.set(true);
          return throwError(() => error);
        }),
        finalize(() => this.#isLoading.set(false)),
      );
  }

  register(userInfo: any): Observable<any> {
    this.#isLoading.set(true);
    this.#hasError.set(false);
    return this.#http
      .post(`${environment.endpoints.auth}/register`, userInfo)
      .pipe(
        take(1),
        tap(() => this.isAuthenticated.set(true)),
        catchError((error) => {
          this.isAuthenticated.set(false);
          this.#hasError.set(true);
          return throwError(() => error);
        }),
        finalize(() => this.#isLoading.set(false)),
      );
  }

  logout() {
    this.#isLoading.set(true);
    this.#hasError.set(false);
    return this.#http
      .post(`${environment.endpoints.auth}/logout`, null, {
        withCredentials: true,
      })
      .pipe(
        take(1),
        tap(() => {
          this.isAuthenticated.set(false);
          this.#router.navigate(['/']);
        }),
        catchError((error) => {
          this.isAuthenticated.set(false);
          this.#hasError.set(true);
          return throwError(() => error);
        }),
        finalize(() => this.#isLoading.set(false)),
      );
  }
}

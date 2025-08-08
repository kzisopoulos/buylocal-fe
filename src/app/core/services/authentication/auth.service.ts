import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  #router = inject(Router);
  isAuthenticated = signal(false);

  constructor() {
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    return this.http
      .get(`${environment.endpoints.auth}/profile`, { withCredentials: true })
      .pipe(
        tap((user) => {
          if (user) {
            this.isAuthenticated.set(true);
          }
        }),
        catchError(() => {
          this.isAuthenticated.set(false);
          return EMPTY;
        }),
      );
  }

  login(credentials: any): Observable<any> {
    return this.http
      .post(`${environment.endpoints.auth}/login`, credentials, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isAuthenticated.set(true)));
  }

  register(userInfo: any): Observable<any> {
    return this.http
      .post(`${environment.endpoints.auth}/register`, userInfo)
      .pipe(tap(() => this.isAuthenticated.set(true)));
  }

  logout() {
    console.log('Calling logout');
    return this.http
      .post(`${environment.endpoints.auth}/logout`, null, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.isAuthenticated.set(false);
          this.#router.navigate(['/login']);
        }),
      );
  }
}

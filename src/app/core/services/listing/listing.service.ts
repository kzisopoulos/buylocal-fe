import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ListingService {
  #httpClient = inject(HttpClient);

  #availableListings = signal<any[]>([]);
  availableListings = this.#availableListings.asReadonly();

  getListings(): void {
    this.#httpClient
      .get<any>(`${environment.endpoints.listing}/listing`, { withCredentials: true })
      .pipe(take(1))
      .subscribe((listings) => this.#availableListings.set(listings));
  }
}

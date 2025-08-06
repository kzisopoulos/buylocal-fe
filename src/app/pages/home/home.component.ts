import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ListingService } from '../../core/services/listing/listing.service';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-home',
  template: `<h1>Welcome to BuyLocal!</h1>
    <button (click)="onLogout()">Logout</button>
    <button (click)="refetchListings()">refetchListings</button> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  listingsService = inject(ListingService);
  authService = inject(AuthService);

  listings = this.listingsService.availableListings;

  ngOnInit(): void {
    this.listingsService.getListings();
  }

  onLogout(): void {
    this.authService.logout().subscribe();
  }

  refetchListings(): void {
    this.listingsService.getListings();
  }
}

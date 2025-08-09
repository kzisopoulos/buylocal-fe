import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ListingService } from '../../core/services/listing/listing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage implements OnInit {
  listingsService = inject(ListingService);

  listings = this.listingsService.availableListings;

  ngOnInit(): void {
    this.listingsService.getListings();
  }

  refetchListings(): void {
    this.listingsService.getListings();
  }
}

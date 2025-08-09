import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { ListingService } from '../../core/services/listing/listing.service';
import { ListingCardComponent } from '../../components/shared/listing-card/listing-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [ListingCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage implements OnInit {
  listingsService = inject(ListingService);

  listings = this.listingsService.availableListings;

  ngOnInit(): void {
    this.listingsService.getListings();
  }
}

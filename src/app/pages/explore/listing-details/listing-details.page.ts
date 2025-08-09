import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListingDetailsPage {}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardComponent, CardContentComponent } from '../../ui/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  imports: [CardComponent, CardContentComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingCardComponent {
  listing = input<{ id: string; name: string; description: string }>();
}

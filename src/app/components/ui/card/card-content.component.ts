import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { cn } from '../../../utils';

@Component({
  selector: '[app-card-content]',
  template: `
      <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent {
  class = input<string>('');

  @HostBinding('class')
  get hostClasses() : string {
    return cn('p-6 pt-0 ', this.class())
  }
}

import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { cn } from '../../../utils';

@Component({
  selector: '[app-card]',
  template: `
      <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  class = input<string>('');

  @HostBinding('class')
  get hostClasses() : string {
    return cn('rounded-lg border border-gray-300 bg-white text-black shadow-sm', this.class());
  }
}

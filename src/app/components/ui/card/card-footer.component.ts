import { ChangeDetectionStrategy, Component, HostBinding, input, Input } from '@angular/core';
import { cn } from '../../../utils';

@Component({
  selector: '[app-card-footer]',
  template: `
      <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
  class = input<string>('');
 
  @HostBinding('class')
  get hostClasses() : string {
    return cn('flex items-center p-6 pt-0', this.class());
  }
}

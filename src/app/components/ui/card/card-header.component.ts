import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { cn } from '../../../utils';

@Component({
  selector: '[appCardHeader]',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {
  class = input<string>('');

  @HostBinding('class')
  get hostClasses(): string {
    return cn('flex flex-col space-y-1.5 p-6', this.class());
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { cn } from '../../../utils';

@Component({
  selector: 'input[appInput]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  class = input<string>('');

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'file:text-gray-700 placeholder:text-gray-300 selection:bg-blue-500 selection:text-blue-100 border-gray-300 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-blue-300 focus-visible:ring-blue-500 focus-visible:ring-[1px]',
      'aria-invalid:ring-red-500  aria-invalid:border-red-300',
      this.class(),
    );
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils';

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-600',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-800',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        ghost: 'hover:bg-gray-100 hover:text-gray-800',
        link: 'underline-offset-4 hover:underline text-blue-500',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-8 w-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
);

export type ButtonProps = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'button[appButton]',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  variant = input<ButtonProps['variant']>('default');
  size = input<ButtonProps['size']>('default');
  class = input<string>('');

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      this.class(),
    );
  }
}

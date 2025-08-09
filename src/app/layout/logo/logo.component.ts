import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingCartIcon } from 'lucide-angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  imports: [LucideAngularModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly ShoppingCartIcon = ShoppingCartIcon;
}

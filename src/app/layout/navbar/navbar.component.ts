import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  HouseIcon,
  LogInIcon,
  LucideAngularModule,
  SearchIcon,
  ShellIcon,
  ShoppingCartIcon,
} from 'lucide-angular';
import { AuthService } from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterLink, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  #authService = inject(AuthService);

  readonly ShoppingCartIcon = ShoppingCartIcon;

  navLinks = computed(() =>
    [
      { label: 'Home', link: '/', icon: HouseIcon, visible: true },
      {
        label: 'Explore',
        link: '/explore',
        icon: SearchIcon,
        visible: true,
      },
      {
        label: 'Dashboard',
        link: '/dashboard',
        icon: ShellIcon,
        visible: this.#authService.isAuthenticated(),
      },
      {
        label: 'Login',
        link: '/login',
        icon: LogInIcon,
        visible: !this.#authService.isAuthenticated(),
      },
    ].filter((link) => link.visible),
  );
}

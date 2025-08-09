import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  HouseIcon,
  LogInIcon,
  LogOutIcon,
  LucideAngularModule,
  SearchIcon,
  ShellIcon,
} from 'lucide-angular';
import { AuthService } from '../../core/services/authentication/auth.service';
import { LogoComponent } from '../logo/logo.component';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    LogoComponent,
    ButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  #authService = inject(AuthService);
  #router = inject(Router);

  readonly LogoutIcon = LogOutIcon;

  isAuthenticated = this.#authService.isAuthenticated;

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

  isActive(url: string): boolean {
    return this.#router.isActive(url, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  logout(): void {
    this.#authService.logout().subscribe();
  }
}

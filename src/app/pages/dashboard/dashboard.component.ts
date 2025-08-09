import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/authentication/auth.service';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  #authService = inject(AuthService);

  logout(): void {
    this.#authService.logout().subscribe();
  }
}

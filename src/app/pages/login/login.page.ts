import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/authentication/auth.service';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { InputComponent } from '../../components/ui/input/input.component';
import { LabelComponent } from '../../components/ui/label/label.component';
import { NgOptimizedImage } from '@angular/common';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    LabelComponent,
    InputComponent,
    NgOptimizedImage,
    LucideAngularModule,
  ],
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  #fb = inject(FormBuilder);
  #authService = inject(AuthService);
  #router = inject(Router);

  readonly LoadingCircleIcon = LoaderCircleIcon;

  isShowingLoginForm = signal(true);
  isLoading = this.#authService.isLoading;

  loginForm = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  registerForm = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required],
  });

  onLogin() {
    if (this.loginForm.valid) {
      this.#authService.login(this.loginForm.value).subscribe(() => {
        this.#router.navigate(['/']);
      });
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.#authService.register(this.registerForm.value).subscribe(() => {
        this.#router.navigate(['/']);
      });
    }
  }
}

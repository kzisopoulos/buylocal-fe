import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './core/guards/authentication/login.guard';
import { authGuard } from './core/guards/authentication/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
    canActivate: [loginGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

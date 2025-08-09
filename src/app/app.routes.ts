import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './core/guards/authentication/login.guard';
import { authGuard } from './core/guards/authentication/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'explore',
        pathMatch: 'full',
        loadComponent: () => import('./pages/explore/explore.component'),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component'),
        canActivate: [loginGuard],
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

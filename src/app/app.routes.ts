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
        loadComponent: () => import('./pages/home/home.page'),
      },
      {
        path: 'explore',
        pathMatch: 'full',
        loadComponent: () => import('./pages/explore/explore.page'),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page'),
        canActivate: [loginGuard],
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.page'),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

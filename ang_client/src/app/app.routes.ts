import { Routes } from '@angular/router';
import { APP_ROUTES } from './configs/app.routes.config';

export const routes: Routes = [
  {
    path: `${APP_ROUTES.LOGIN}`,
    loadComponent: () => import('../app/core/auth/components/login/login').then((m) => m.Login),
  },
  {
    path: `${APP_ROUTES.REGISTER}`,
    loadComponent: () =>
      import('../app/core/auth/components/register/register').then((m) => m.Register),
  },
];

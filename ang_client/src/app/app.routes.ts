import { Routes } from '@angular/router';
import { APP_ROUTES } from './configs/app.routes.config';
import { MainLayout } from './layout/main-layout';
import { Home } from './features/Home/components/home';

export const routes: Routes = [

  {
    path:'',
    component: MainLayout,
    children:[
      {
        path:"",
        pathMatch:"full",
        component:Home
      },
    ]
  },

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

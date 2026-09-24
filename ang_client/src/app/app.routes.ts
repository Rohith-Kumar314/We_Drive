import { Routes } from '@angular/router';
import { APP_ROUTES } from './configs/app.routes.config';
import { Login } from './core/auth/components/login/login';

export const routes: Routes = [
    {
        path:`${APP_ROUTES.LOGIN}`,
        loadComponent:()=>import("../app/core/auth/components/login/login").then(m=>m.Login)
    },
];

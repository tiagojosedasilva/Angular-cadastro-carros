import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListarComponent } from './pages/listar/listar.component';
import { InsertCarComponent } from './pages/insert-car/insert-car.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'listar',
        component: ListarComponent
    },
    {
        path: 'insert-car',
        component: InsertCarComponent
    },
];

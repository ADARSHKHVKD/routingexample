import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Student } from './student/student';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

export const routes: Routes = [
    // {
    //     path:'',component:Home},
    // {
    //     path:'contact',component:Contact
    // },
    // {
    //     path:'about',component:About
    // },
    // {
    //     path:'student/:id',component:Student
    // },
    {
        path:'',component:Login

    },
    {
        path:'dashboard',component:Dashboard,canActivate:[authGuard]
    }

];

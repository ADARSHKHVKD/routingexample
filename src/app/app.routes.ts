import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Student } from './student/student';

export const routes: Routes = [
    {
        path:'',component:Home},
    {
        path:'contact',component:Contact
    },
    {
        path:'about',component:About
    },
    {
        path:'student/:id',component:Student
    }

];

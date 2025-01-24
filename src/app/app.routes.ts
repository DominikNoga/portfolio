import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ProjectDetailsPageComponent } from './pages/project-details/project-details-page/project-details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'details',
        component: ProjectDetailsPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

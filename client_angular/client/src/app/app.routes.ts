import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    // {
    //     path: 'about-us',
    //     loadChildren: () =>
    //       import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
    //   },
];

import { Routes } from '@angular/router';
import { PhishingComponent } from './pagina/phishing/phishing.component';

export const routes: Routes = [
    {
        path: '',
        component: PhishingComponent
    },
    {
        path: 'phishing',
        component: PhishingComponent
    }
];

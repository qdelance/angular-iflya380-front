
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { SearchFormComponent } from './components/search-form.component';
import { AirlinesComponent } from './components/airlines.component';
import { AirlineDetailComponent } from './components/airline-detail.component';
import { DestinationsComponent } from './components/destinations.component';
import { NotFoundComponent } from './components/not-found.component';
import { DestinationDetailComponent } from "./components/destination-detail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'booking', component: SearchFormComponent },
    { path: 'airlines', component: AirlinesComponent },
    { path: 'airline/:id', component: AirlineDetailComponent },
    { path: 'destinations', component: DestinationsComponent },
    { path: 'destination/:name', component: DestinationDetailComponent },
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
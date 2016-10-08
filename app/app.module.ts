import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { appRouting } from './app.routing'

import { AppComponent }   from './app.component';
import { HomeComponent }   from './components/home.component';
import { SearchFormComponent }   from './components/search-form.component';
import { AirlinesComponent }   from './components/airlines.component';
import { DestinationsComponent }   from './components/destinations.component';
import { NotFoundComponent }   from './components/not-found.component';

import { AirportSearchService } from "./shared/airport-search.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting
    ]
    ,
    declarations: [
        AppComponent,
        HomeComponent,
        SearchFormComponent,
        AirlinesComponent,
        DestinationsComponent,
        NotFoundComponent
    ],
    providers: [
        AirportSearchService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
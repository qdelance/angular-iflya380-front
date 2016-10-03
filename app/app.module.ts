import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }   from './app.component';
import { SearchFormComponent }   from './search-form.component';
import { AirportSearchService } from "./airport-search.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, SearchFormComponent],
    providers: [
        AirportSearchService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
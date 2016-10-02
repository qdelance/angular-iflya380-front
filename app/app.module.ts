import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SearchFormComponent }   from './search-form.component';
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, SearchFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
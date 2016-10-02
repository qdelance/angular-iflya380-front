import { Component } from '@angular/core';


export class Search {
    constructor(public departure: string,
                public arrival: string,
                public departureDate: string,
                public returnDate: string,
                public cabinClass: number,
                public numberPassengers: number,
                public oneWay: boolean) {
    }
}

@Component({
    selector: 'search-form',
    templateUrl: 'app/search-form.component.html'
})
export class SearchFormComponent {
    cabinClasses = [
        {id: 1, name: 'Economy'},
        {id: 2, name: 'Premium'},
        {id: 3, name: 'Business'},
        {id: 4, name: 'First'},
    ];

    model:Search = new Search('CDG', 'JFK', '01/09/2016', '10/12/2016', 2, 3, true);

    get dump() {
        return JSON.stringify(this.model);
    }
}
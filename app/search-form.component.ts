import { Component, OnInit } from '@angular/core';
import { Airport, AirportSearchService } from "./airport-search.service";

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

export class Search {
    constructor(public departure: string,
                public arrival: string,
                public departureDate: string,
                public returnDate: string,
                public cabinClass: number,
                public numberPassengers: number) {
    }
}

@Component({
    selector: 'search-form',
    templateUrl: 'app/search-form.component.html',
    styleUrls: ['app/search-form.component.css'],
    providers: [AirportSearchService]
})
export class SearchFormComponent implements OnInit {

    departureAirports: Observable<Airport[]>;
    private departureAirportSearchTerms = new Subject<string>();
    private displayDepartureDiv: boolean = false;

    arrivalAirports: Observable<Airport[]>;
    private arrivalAirportSearchTerms = new Subject<string>();
    private displayArrivalDiv: boolean = false;

    cabinClasses = [
        {id: 1, name: 'Economy'},
        {id: 2, name: 'Premium'},
        {id: 3, name: 'Business'},
        {id: 4, name: 'First'},
    ];

    model: Search = new Search('CDG', 'JFK', '01/09/2016', null, 2, 3);

    constructor(private airportSearchService: AirportSearchService) {
    }

    // Push a search term into the observable stream.
    departureSearch(term: string): void {
        this.displayDepartureDiv = true;
        this.departureAirportSearchTerms.next(term);
    }

    arrivalSearch(term: string): void {
        this.displayArrivalDiv = true;
        this.arrivalAirportSearchTerms.next(term);
    }

    selectDeparture(airport: Airport) {
        console.log('Setting departure');
        console.log(airport);
        this.model.departure = airport.iata;
    }

    selectArrival(airport: Airport) {
        console.log('Setting arrival');
        console.log(airport);
        this.model.arrival = airport.iata;
    }

    ngOnInit(): void {
        this.departureAirports = this.departureAirportSearchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the airport search observable
                ? this.airportSearchService.searchAirports(term)
                // or the observable of empty airports if no search term
                : Observable.of<Airport[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Airport[]>([]);
            });
        this.departureAirports.subscribe();

        this.arrivalAirports = this.arrivalAirportSearchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the airport search observable
                ? this.airportSearchService.searchAirports(term)
                // or the observable of empty airports if no search term
                : Observable.of<Airport[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Airport[]>([]);
            });
        this.arrivalAirports.subscribe();
    }

    get dump() {
        return JSON.stringify(this.model);
    }
}
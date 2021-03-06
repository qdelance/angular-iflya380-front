import { Injectable }     from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

export class Airport {
    constructor(public iata: string,
                public name: string) {
    }
}

// https://api.iflya380.pixopat.io/airports?apikey=a2b295e8ffc923e3d17254616974d23d
// https://api.iflya380.pixopat.io/airports/cdg/search?apikey=a2b295e8ffc923e3d17254616974d23d
// check to store data locally https://coryrylan.com/blog/angular-2-observable-data-services
// http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

@Injectable()
export class AirportSearchService {
    constructor(private http: Http) {
    }

    getAirports(): Promise<Airport[]> {
        return this.http.get('https://api.iflya380.pixopat.io/airports?apikey=a2b295e8ffc923e3d17254616974d23d')
            .toPromise()
            .then(response => response.json() as Airport[])
            .catch(this.handleError);
    }

    getAirportByIATA(iata: string): Promise<Airport> {
        return this.getAirports()
            .then(airports => airports.find(airport => airport.iata === iata));
    }

    searchAirports(iata: string): Promise<Airport[]> {
        console.log('Search for term "' + iata + '"');
        return this.http.get('https://api.iflya380.pixopat.io/airports/' + iata + '/search?apikey=a2b295e8ffc923e3d17254616974d23d')
            .toPromise()
            .then(response => response.json() as Airport[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred');
        console.error(error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
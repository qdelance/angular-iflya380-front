import { Injectable }     from '@angular/core';

export class Airport {
    constructor(public iata: string,
                public name: string) {
    }
}

export const AIRPORTS: Airport[] = [
    {iata: 'PAR', name: 'Paris All airports'},
    {iata: 'CDG', name: 'Paris Charles de Gaulle'},
    {iata: 'ORY', name: 'Paris Orly'},
    {iata: 'TLS', name: 'Toulouse'},
    {iata: 'JFK', name: 'New York'},
    {iata: 'LON', name: 'Mondon ALl airports'},
    {iata: 'NYC', name: 'New York All airports'},
    {iata: 'PEK', name: 'Pekin'},
    {iata: 'DOH', name: 'Doha'},
    {iata: 'AUH', name: 'Abu Dhabi'}
];

@Injectable()
export class AirportSearchService {
    constructor() {
    }

    getAirports(): Promise<Airport[]> {
        return Promise.resolve(AIRPORTS);
    }

    getAirportByIATA(iata: string): Promise<Airport> {
        return this.getAirports()
            .then(airports => airports.find(airport => airport.iata === iata));
    }

    searchAirports(iata: string): Promise<Airport[]> {
        console.log('Search for term ' + iata);
        return this.getAirports()
            .then(airports => airports.filter(airport => airport.name.search(new RegExp(iata,'i')) != -1));
    }
}
import { Injectable }     from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Airline } from "./airline";

export const AIRLINES: Airline[] = [
    {
        id: 1,
        name: 'Air France',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-airfrance.png',
        nbDestinations: 11
    },
    {
        id: 2,
        name: 'Asiana Airlines',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-asiana.png',
        nbDestinations: 5
    },
    {
        id: 3,
        name: 'British Airways',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-british.png',
        nbDestinations: 9
    },
    {
        id: 4,
        name: 'China Southern Airlines',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-chinasouthern.png',
        nbDestinations: 8
    },
    {
        id: 5,
        name: 'Emirates',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-emirates.png',
        nbDestinations: 40
    },
    {
        id: 6,
        name: 'Etihad Airways',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-etihad.png',
        nbDestinations: 6
    },
    {
        id: 7,
        name: 'Korean Air',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-korean.png',
        nbDestinations: 6
    },
    {
        id: 8,
        name: 'Lufthansa',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-lufthansa.png',
        nbDestinations: 12
    },
    {
        id: 9,
        name: 'Malaysia Airlines',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-malaysia.png',
        nbDestinations: 2
    },
    {
        id: 10,
        name: 'Qantas',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-qantas.png',
        nbDestinations: 6
    },
    {
        id: 11,
        name: 'Qatar Airways',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-qatar.png',
        nbDestinations: 6
    },
    {
        id: 12,
        name: 'Singapore Airlines',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-singapore.png',
        nbDestinations: 16
    },
    {
        id: 13,
        name: 'Thai Airways',
        planeImage: 'https://www.iflya380.com/etc/designs/A380_love/images/illus/plane-thai.png',
        nbDestinations: 7
    },
];

@Injectable()
export class AirlinesService {
    constructor() {
    }

    getAirlines(): Promise<Airline[]> {
        return Promise.resolve(AIRLINES);
    }

    getAirline(id: number): Promise<Airline> {
        return this.getAirlines().then(airlines => airlines.find(airline => airline.id === id));
    }

}
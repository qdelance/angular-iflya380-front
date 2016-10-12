import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DestinationsService } from "../shared/destinations.service";
import { Destination } from "../shared/destination";

@Component({
    template: `
<div *ngIf="destination">
    <h2>{{ destination.name }}</h2>
    <img [src]="destination.image">
    <p>IATA {{ destination.iata}} </p>
    <p>Region {{ destination.region}} </p>
    <p>Region {{ destination.region}} </p>
    <a [href]="destination.destinationUrl">Link to external website</a>
</div>

<a [routerLink]="['/destinations']" class="btn btn-sm btn-info">Destinations</a>
`
})
export class DestinationDetailComponent implements OnInit {

    destination: Destination;

    constructor(private route: ActivatedRoute, private router: Router, private destinationsService: DestinationsService) {}

    ngOnInit(): void {
        let name = this.route.snapshot.params['name'];
        console.log('Getting destination with name ' + name);
        this.destinationsService.getDestination(name).then(destination => this.destination = destination);
    }

}
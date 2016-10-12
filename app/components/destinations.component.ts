import { Component, OnInit } from "@angular/core";

import { DestinationsService } from "../shared/destinations.service";
import { Destination } from "../shared/destination";

@Component({
    template: `
<h2>Destinations</h2>
<div class="container-fluid">
  <div *ngIf="destinations" class="row" >
    <div *ngFor="let destination of destinations" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div [routerLink]="['/destination', destination.name]">
      <p>{{ destination.name}} - {{ destination.iata }}</p>
      <img [src]="destination.imageSquare" class="img-responsive">
      </div>
    </div>
  </div>
</div>
`
})
export class DestinationsComponent implements OnInit {

    destinations: Destination[];

    constructor(private destinationsService: DestinationsService) {}

    ngOnInit(): void {
        this.destinationsService.getDestinations().then(destinations => this.destinations = destinations);
    }
}
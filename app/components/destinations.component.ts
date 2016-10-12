import { Component, OnInit } from "@angular/core";

import { DestinationsService } from "../shared/destinations.service";
import { Destination } from "../shared/destination";

@Component({
    styles: [`
.widgets select {
    margin: 15px 0;
}
`],
    template: `
<h2>Destinations</h2>
<div class="container-fluid">
  <div *ngIf="destinations" class="row widgets" >
    <div class="col-lg-6" *ngIf="regions">
      <select class="form-control" (change)="onRegionChange($event.target.value)">
         <option value="">All regions</option>
         <option *ngFor="let region of regions">{{ region }}</option>
      </select>
    </div>
    <div class="col-lg-6" *ngIf="airlines">
      <select class="form-control" (change)="onAirlineChange($event.target.value)">
         <option value="">All airlines</option>
         <option *ngFor="let airline of airlines">{{ airline }}</option>
      </select>
    </div>
  </div>
  <div>
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

    selectedRegion: string = '';
    selectedAirline: string = '';

    regions: string[] = [];
    airlines: string[] = [];

    constructor(private destinationsService: DestinationsService) {
    }

    ngOnInit(): void {
        this.refreshDestination();
    }

    onRegionChange(region) {
        this.selectedRegion = region;
        this.refreshDestination();
    }

    onAirlineChange(airline) {
        this.selectedAirline = airline;
        this.refreshDestination();
    }

    refreshDestination() {
        console.log('Region filter = ' + this.selectedRegion);
        console.log('Airline filter = ' + this.selectedAirline);
        this.destinationsService.getDestinations().then(destinations => {
            // localValue used to filter
            let tmpDestinations = destinations;
            if (this.selectedRegion !== '') {
                tmpDestinations = tmpDestinations.filter(destination => destination.region === this.selectedRegion);
            }
            if (this.selectedAirline !== '') {
                tmpDestinations = tmpDestinations.filter(destination => destination.airlines.indexOf(this.selectedAirline) !== -1);
            }
            console.log('Destination list size is ' + tmpDestinations.length);
            this.destinations = tmpDestinations;
            this.destinations.forEach(destination => {
                if (this.regions.indexOf(destination.region) == -1) {
                    this.regions.push(destination.region);
                }
                this.regions.sort();
                destination.airlines.forEach(airline => {
                        if (this.airlines.indexOf(airline) == -1) {
                            this.airlines.push(airline);
                        }
                    }
                )
                this.airlines.sort();
            });
        })
    }
}
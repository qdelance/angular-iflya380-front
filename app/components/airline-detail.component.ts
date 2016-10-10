import { Component, OnInit } from "@angular/core";

import { AirlinesService } from "../shared/airlines.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Airline } from "../shared/airline";

@Component({
    template: `
<div *ngIf="airline">
    <h2>{{ airline.name }}</h2>
    <img [src]="airline.planeImage">
    <p>{{ airline.nbDestinations}} destinations</p>
</div>
<a (click)="goHome()" class="btn btn-sm btn-info">Home</a> <!-- call to fn -->
<a [routerLink]="['/airlines']" class="btn btn-sm btn-info">Airlines</a><!-- direct routerLink -->
<a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a><!-- HTML 5 -->
`
})
export class AirlineDetailComponent implements OnInit {

    airline: Airline;

    constructor(private route: ActivatedRoute, private router: Router, private airlineService: AirlinesService) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id']; // Params are always strings, we force cast to number (otherwise "===" in service won't work)
        console.log('Getting airline with ID ' + id);
        this.airlineService.getAirline(id).then(airline => this.airline = airline);
    }

    goHome() {
        this.router.navigate(['home']);
    }

    goBack() {
        window.history.back();
    }

}
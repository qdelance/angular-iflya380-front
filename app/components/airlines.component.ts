import { Component, OnInit } from "@angular/core";
import { AirlinesService } from "../shared/airlines.service";
import { Airline } from "../shared/airline";
@Component({
    template: `
<h2>Airlines</h2>
<div class="container-fluid">
<div *ngIf="airlines" class="row">
  <div *ngFor="let airline of airlines" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <img [src]="airline.planeImage" class="img-responsive">
    <h3>{{ airline.name }}</h3>
    <p>{{ airline.nbDestinations }} destinations</p>
    </div>
</div>
</div>
    
`
})
export class AirlinesComponent implements OnInit {
    private airlines: Airline[];

    constructor(private airlinesService: AirlinesService) {}

    ngOnInit(): void {
        this.airlinesService.getAirlines().then(airlines => this.airlines = airlines);
    }
}
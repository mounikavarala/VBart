import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
@Component({
  selector: 'stations-to-page',
  inputs: ['stationsName'],
  templateUrl: 'to-stations.html'
})
export class ToStationsPage {
  stationsName: string;


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchStationsPage } from '../search-stations/search-stations';
import { StationsService} from "../services/StationsService";

@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html'
})
export class StationsPage {

  page = SearchStationsPage;

  fromStation : StationInfo;
  toStation : StationInfo;
  constructor(public navCtrl: NavController, public stationsService : StationsService) {

    this.fromStation = this.stationsService.from;
    this.toStation = this.stationsService.to;
  }

  goToSearch(type) {
    this.navCtrl.push(this.page, {pageType : type});
  }

  goToSearchTo() {
    this.navCtrl.push(this.page, {pageType : 'to'});
  }


}



interface StationInfo {
  name : String;
  abbr : String;
  address : String;
  county : String;
  state : String;
  zipcode : String;
  gtfs_latitude : String;
  gtfs_longitude : String;
}


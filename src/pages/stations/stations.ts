import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchStationsPage } from '../search-stations/search-stations';

@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html'
})
export class StationsPage {

  page = SearchStationsPage;
  constructor(public navCtrl: NavController) {

  }

  goToSearchFrom() {
    this.navCtrl.push(this.page);
  }


}


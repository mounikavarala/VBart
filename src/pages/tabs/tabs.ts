import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { StationsPage } from '../stations/stations';
import { FavoritesPage } from '../favorites/favorites';
import { AdvisoriesPage } from '../advisories/advisories';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StationsPage;
  tab3Root = FavoritesPage;
  tab4Root = AdvisoriesPage;

  constructor() {

  }
}

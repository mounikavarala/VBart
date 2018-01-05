import { Component } from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}

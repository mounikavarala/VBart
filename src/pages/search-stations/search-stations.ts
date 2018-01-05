import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'station-search-page',
  templateUrl: 'search-stations.html'
})
export class SearchStationsPage implements OnInit{

   constructor(private http: HttpClient) {}

   stations: Object[];

  filteredStations: Object[];
   searchTxt : String;

  getItems() {

    // set val to the value of the ev target
    //var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (this.searchTxt) {
      this.filteredStations = this.stations.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.searchTxt.toLowerCase()) > -1);
      })
    } else {
      this.filteredStations = this.stations;
    }
  }

   ngOnInit(){

      this.http.get<ItemsResponse>('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
        .subscribe((data) => {

            this.filteredStations = this.stations = data.root['stations']['station'];

            console.log(this.stations);
          },

          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('An error occurred:', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          }
        );

   }

}

interface ItemsResponse{
  root: Object;
}

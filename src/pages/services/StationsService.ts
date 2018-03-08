import { Injectable } from '@angular/core';

@Injectable()
export class StationsService {
  from : StationInfo;
  to : StationInfo;
  constructor() { }
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

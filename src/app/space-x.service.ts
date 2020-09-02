import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private httpCli: HttpClient) { }

  getSpaceXList() {
    return this.httpCli.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
  getYear(value) {
    let url = `https://api.spacexdata.com/v3/launches?launch_success=true&&land_success=true&&launch_year=${value}`;
    return this.httpCli.get(url);
  }
  getLaunch(value) {
    return this.httpCli.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}`)
  }
  getLand(value,launchValue){
    return this.httpCli.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${value}`)
  }
}

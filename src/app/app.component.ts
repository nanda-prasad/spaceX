import { Component } from '@angular/core';
// import { SpaceXService } from './shared/space-x.service';
import { HttpClient } from '@angular/common/http';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceX';
  filterYears : any = [];
  result: any = [];
  launchYears: any = [];
  yearsArray : any = [];
  Launch: any;
  constructor( private http: HttpClient, private customService : SpaceXService){}

  ngOnInit(){
    this.getSpaceXList();
  }
  getSpaceXList(){
    this.customService.getSpaceXList().subscribe(res=>{
      this.result = res;
      this.result.filter(ele=>{
        this.launchYears.push(ele.launch_year)
      })
      this.getYears();
    });
    
  }
  getYears(){
    this.yearsArray = this.launchYears.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
  }
  yearFilter(value){
    this.customService.getYear(value).subscribe(res=>{
      this.result = res;
    })
  }
  getLaunch(value){
    this.Launch = value;
    this.customService.getLaunch(value).subscribe(res=>{
      this.result = res;
    })
  }
  getLand(value){
    console.log(this.Launch);
    if (this.Launch != undefined){
      this.Launch = this.Launch
    }else{
      this.Launch = true;
    }
    this.customService.getLand(value,this.Launch).subscribe(res=>{
      this.result = res;
    })
  }
}

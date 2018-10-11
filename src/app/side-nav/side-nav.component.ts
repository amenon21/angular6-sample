import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { ApiService } from  '../api.service';
import { HttpClient} from  '@angular/common/http';
import { Location } from '../location';
import {ApiService} from '../api.service';


@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  public myValue = false;
  public otherValue = false;
  private  httpClient:  HttpClient;

  private searchLatLongUrl  =  'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

constructor(private breakpointObserver: BreakpointObserver, private apiService: ApiService) {}

  toggleNav(value){
    console.log("value is" +value);
    if(value=="ltoa"){
      console.log("value in 1 "+value);
      this.myValue=true;
      this.otherValue=false;
      console.log("myValue"+this.myValue);
    }
    else if(value=="atol"){
      console.log("value in 2 "+value);
      this.myValue=false;
      this.otherValue=true;
      console.log("myValue"+this.myValue);
      console.log("otherValue"+this.otherValue);

    }





  //show different panelsets based on value chosen
  }

  searchAddress(){
     //console.log("search address")


  }

  public  getlldata(){
    //this.apiService.getContacts().subscribe((data:  Array<object>) => {
       // this.contacts  =  data;
      //  console.log(data);
   // });
}

getLatLongResults (): Observable<Location> {
  console.log("name"+Location.name);

  return this.httpClient.get<Location>(this.searchLatLongUrl)

}

  getAddress(): void {
  console.log("get Address");
    this.apiService.getAddress()
      .subscribe(data => console.log('address', data));
  }

  }

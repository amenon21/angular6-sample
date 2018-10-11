import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable} from 'rxjs';
import { Location } from './location';
import {Address} from './address';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private searchLatLongUrl  =  'https://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBSNv7ia8TfVCFeMSdUyCpRXJNPnxP5XUo';

    constructor(private  httpClient:  HttpClient) { }



  getLatLongResults (): Observable<Location> {
   // return this.httpClient.get<Location>(this.searchLatLongUrl)
    return null;
  }

  getAddress(): Observable<Address> {
      console.log("get address2");
    return this.httpClient.get<Address>(this.searchLatLongUrl);
  }
}

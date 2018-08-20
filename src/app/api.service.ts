import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL  =  'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBSNv7ia8TfVCFeMSdUyCpRXJNPnxP5XUo';

  constructor(private  httpClient:  HttpClient) { }

  getlldata(){
    return  this.httpClient.get(`${this.API_URL}`);
}
}

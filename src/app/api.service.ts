import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable} from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private searchLatLongUrl  =  'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521';

  constructor(private  httpClient:  HttpClient) { }

  

  getLatLongResults (): Observable<Location> {
    return this.httpClient.get<Location>(this.searchLatLongUrl)
  }
}

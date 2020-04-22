import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Geolocation } from '@ionic-native/geolocation/ngx';




@Injectable({
  providedIn: 'root'
})
export class WeatheredataService {

  constructor(private httpClient: HttpClient) { }
  public getWeather():Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat=53.8&lon=8.63&appid=fec30507acb533f670080ab3174f226f')
    }
  
}

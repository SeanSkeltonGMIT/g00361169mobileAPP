import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage'


//

@Injectable({
  providedIn: 'root'
})

export class WeatheredataService {

  //for http requests too api servce
  constructor(private httpClient: HttpClient) { }


  //methods for pulling api data for galway,dublin and counties entered.
  public getWeatherCity():Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway,ie&units=metric&appid=fec30507acb533f670080ab3174f226f')
  }

  public getWeatherIreland():Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&units=metric&appid=fec30507acb533f670080ab3174f226f')
  }

  public searchWeatherCity(city:any):Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',ie&units=metric&appid=fec30507acb533f670080ab3174f226f')
    }


  
}

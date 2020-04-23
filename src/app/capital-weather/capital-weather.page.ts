import { Component, OnInit } from '@angular/core';
import { WeatheredataService } from '../weatheredata.service';

@Component({
  selector: 'app-capital-weather',
  templateUrl: './capital-weather.page.html',
  styleUrls: ['./capital-weather.page.scss'],
})
export class CapitalWeatherPage implements OnInit {
  
  //giving access too weather service too pass information
  constructor(private weatherdataservice: WeatheredataService) { }
    
    //variables
    weatherData 
    mainData:any = []
    coordData :any = []
    countyData :any = []
    windData :any = []

    //accesing the a method which handles the weatherAPI from dublin and binding data too class variables for use in html file
    ngOnInit() {
      this.weatherdataservice.getWeatherIreland().subscribe(
        (data)=>{
          this.weatherData = data.weather;
          this.mainData = data.main;
          this.coordData = data.coord;
          this.countyData = data.sys;
          this.windData = data.wind;
        }
      )
  }

}

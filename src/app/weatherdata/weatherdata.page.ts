import { Component, OnInit } from '@angular/core';
import { WeatheredataService } from '../weatheredata.service';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.page.html',
  styleUrls: ['./weatherdata.page.scss'],
})
export class WeatherdataPage implements OnInit {

  //variables
  weatherData: any = [];
  iconCode:any;
  mainData: any = [];
  coordData:any = [];
  countyData = [];
  windData = [];
  searchCity: String = "";


//accesss service file and all methods
  constructor(private weatherdataservice: WeatheredataService) { }

  //upon start up pulls all relevant data for galway and passses it too class variables
  ngOnInit() {
    this.weatherdataservice.getWeatherCity().subscribe(
      (data)=>{
        this.weatherData = data.weather;
        this.mainData = data.main;
        this.coordData = data.coord;
        this.countyData = data.sys;
        this.windData = data.wind;
      }
    )

  }

//this is performed when the button is clicked in the html file,calls  the search method in the service too retrieve data for county entered and passes it too variables in this class 
    doSearchCity(){
      console.log(this.searchCity)
      this.weatherdataservice.searchWeatherCity(this.searchCity).subscribe(
      (data)=>{
        this.weatherData = data.weather;
        this.mainData = data.main;
        this.coordData = data.coord;
        this.countyData = data.sys;
        this.windData = data.wind;
        console.log(data.weather)
      })
    }

    
  }



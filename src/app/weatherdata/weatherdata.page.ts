import { Component, OnInit } from '@angular/core';
import { WeatheredataService } from '../weatheredata.service';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.page.html',
  styleUrls: ['./weatherdata.page.scss'],
})
export class WeatherdataPage implements OnInit {
  weatherData: any = [];
  iconCode:any;
  mainData: any = [];
  coordData:any = [];

  icon:any = "http://openweathermap.org/img/wn/" +this.iconCode+".png";

  constructor(private weatherdataservice: WeatheredataService) { }

  ngOnInit() {
    this.weatherdataservice.getWeather().subscribe(
      (data)=>{
      this.weatherData = data.weather;
      this.mainData = data.main;
      this.coordData = data.coord;
      console.log(data);
      
    })

    }
  }



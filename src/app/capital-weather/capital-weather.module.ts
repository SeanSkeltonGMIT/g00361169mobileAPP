import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapitalWeatherPageRoutingModule } from './capital-weather-routing.module';

import { CapitalWeatherPage } from './capital-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapitalWeatherPageRoutingModule
  ],
  declarations: [CapitalWeatherPage]
})
export class CapitalWeatherPageModule {}

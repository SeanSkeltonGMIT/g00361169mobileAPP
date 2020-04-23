import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapitalWeatherPage } from './capital-weather.page';

const routes: Routes = [
  {
    path: '',
    component: CapitalWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitalWeatherPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherdataPageRoutingModule } from './weatherdata-routing.module';

import { WeatherdataPage } from './weatherdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherdataPageRoutingModule
  ],
  declarations: [WeatherdataPage]
})
export class WeatherdataPageModule {}

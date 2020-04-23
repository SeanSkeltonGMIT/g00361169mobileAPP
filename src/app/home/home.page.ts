import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //variables
  latitude: any;
  longitude: any;
  accuarcy: any;

  //giving access too geolocation plugin options
  constructor(private geolocation: Geolocation /*,private storage: Storage*/) {}

  //on intilization
  ngOnInit() {
    //binding the reponse of from geolocation too  of a method within geolocation too a property
    this.geolocation.getCurrentPosition().then((resp) => {
  
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
  
        //error handling
    }).catch((error) => {
      console.log('Error getting location', error);
    });
}

}

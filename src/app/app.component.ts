import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/* Core CSS required for Ionic components to work properly */
import '@ionic/angular/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/angular/css/normalize.css';
import '@ionic/angular/css/structure.css';
import '@ionic/angular/css/typography.css';

/* Optional CSS utils that can be commented out */
import "@ionic/angular/css/padding.css";
import "@ionic/angular/css/float-elements.css";
import "@ionic/angular/css/text-alignment.css";
import "@ionic/angular/css/text-transformation.css";
import "@ionic/angular/css/flex-utils.css";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

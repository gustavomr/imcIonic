import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';



import { MyApp } from './app.component';
import { ImcService } from '../app/imc/imc.service';
import { WeatherService } from '../app/weather/weather.service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ImcComponent } from '../app/imc/imc.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ImcComponent
  ],
  providers: [
    StatusBar,
    ImcService,
    WeatherService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

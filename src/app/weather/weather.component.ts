import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from './weather.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherComponent {

  weathers:{};

  constructor(public navCtrl: NavController,
  private weatherService: WeatherService, private geolocation: Geolocation) {
    this.buscarPrevisao();
  }


  buscarPrevisao() {

      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.weatherService.getWeatherByQuery(resp.coords.latitude,resp.coords.longitude).subscribe(data => this.weathers = data);
      }).catch((error) => {
        console.log('Error getting location', error);
      });

  }
}

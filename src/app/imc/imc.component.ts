import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImcService } from './imc.service';
import { WeatherService } from '../../app/weather/weather.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html'
})
export class ImcComponent {

  peso:any;
  altura:any;
  resultado:any;

  users:{};
  weathers:{};

  constructor(public navCtrl: NavController, private imcService: ImcService,
  private weatherService: WeatherService, private geolocation: Geolocation) {

  }

  calcularIMC() {
        this.resultado = (this.peso / (this.altura * this.altura))
    }

  buscarPrevisao() {
      //this.imcService.getDados().subscribe(data => this.users = data);

      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.weatherService.getWeatherByQuery(resp.coords.latitude,resp.coords.longitude).subscribe(data => this.weathers = data);
      }).catch((error) => {
        console.log('Error getting location', error);
      });

  }
}

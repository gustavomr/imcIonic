import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImcService } from './imc.service';
import { WeatherService } from '../../app/weather/weather.service';


@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html'
})
export class ImcComponent {

  peso:any;
  altura:any;
  resultado:any;

  users:{};
  weather:{};

  constructor(public navCtrl: NavController, private imcService: ImcService,
  private weatherService: WeatherService) {

  }

  calcularIMC() {
        this.resultado = (this.peso / (this.altura * this.altura))
    }

  buscarPrevisao() {
      this.imcService.getDados().subscribe(data => this.users = data);
  }
}

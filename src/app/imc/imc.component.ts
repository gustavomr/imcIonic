import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html'
})
export class ImcComponent {

  peso:any;
  altura:any;
  resultado:any;

  //users:{};

  constructor(public navCtrl: NavController) {

  }

  calcularIMC() {
        this.resultado = (this.peso / (this.altura * this.altura))
    }

}

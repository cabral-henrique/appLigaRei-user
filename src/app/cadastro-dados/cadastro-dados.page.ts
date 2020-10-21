import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-dados',
  templateUrl: './cadastro-dados.page.html',
  styleUrls: ['./cadastro-dados.page.scss'],
})
export class CadastroDadosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async OnclickCadastrar() {
    //console.log('entrou');
    this.navCtrl.navigateForward('/cadastro-endereco');
  }
  async OnclickCancelar() {
    this.navCtrl.navigateRoot('/tabs/login');
  }

}

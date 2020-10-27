import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  async OnclickCancelar() {
    this.navCtrl.navigateRoot('/tabs/login');
  }

}

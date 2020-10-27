import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-checklist',
  templateUrl: './cadastro-checklist.page.html',
  styleUrls: ['./cadastro-checklist.page.scss'],
})
export class CadastroChecklistPage implements OnInit {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  OnclickCadastrar() {
    this.menuCtrl.enable(true);
    const tabBarlogado = document.getElementById('logado');
    if (tabBarlogado !== null) {
      tabBarlogado.style.display = 'flex';
    }
    this.navCtrl.navigateRoot('/tabs/inicio');

  }
  async OnclickCancelar() {
    this.navCtrl.navigateRoot('/tabs/login');
  }

}

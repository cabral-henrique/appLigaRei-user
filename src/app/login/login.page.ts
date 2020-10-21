import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform, MenuController } from '@ionic/angular';
import { RecuperarSenhaPage } from '../recuperar-senha/recuperar-senha.page';
import { CadastroPage } from '../cadastro/cadastro.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public menuCtrl: MenuController,
    public plat: Platform
  ) { }
  ngOnInit() {
  }
  OnclickLogar() {
    this.menuCtrl.enable(true);
    const tabBarlogado = document.getElementById('logado');
    if (tabBarlogado !== null) {
      tabBarlogado.style.display = 'flex';
    }

    this.navCtrl.navigateRoot('/tabs/inicio');
  }
  async onClickRecuperarSenha() {
    const modal = await this.modalCtrl.create({
      component: RecuperarSenhaPage,
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
  }

  async onClickCadastro() {
    this.navCtrl.navigateForward('/cadastro');
  }
}

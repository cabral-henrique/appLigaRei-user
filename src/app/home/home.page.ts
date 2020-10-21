import { Component } from '@angular/core';
import { ModalController, NavController, Platform, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController,) { }
  OnComecar() {
    this.navCtrl.navigateRoot('/tabs/login');
  }
}

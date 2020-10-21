import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;
  pages = [

    {
      titulo: 'Home',
      url: 'tabs/inicio',
      icone: 'home',
      color: 'primary',
    },
    {
      titulo: 'Ranking',
      url: 'tabs/ranking',
      icone: 'albums',
      color: 'primary',
    },
    {
      titulo: 'Perfil',
      url: 'tabs/perfil',
      icone: 'person',
      color: 'primary',
    },
    {
      titulo: 'Sair',
      url: 'tabs/home',
      icone: 'log-out',
      color: 'danger',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.menuCtrl.enable(false);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  SelectItem(item) {
    if (item.titulo === 'Sair') {
      localStorage.clear();

      this.menuCtrl.enable(false);

      const tabBarlogado = document.getElementById('logado');
      if (tabBarlogado !== null) {
        tabBarlogado.style.display = 'none';
      }
    }
  }
}

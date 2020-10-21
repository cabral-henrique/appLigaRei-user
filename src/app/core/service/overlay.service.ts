import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';
@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  constructor(
    private alertCrtl: AlertController,
    private toastCrtl: ToastController,
    private LoadCrtl: LoadingController
  ) { }

  async alert(options?: AlertOptions): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCrtl.create(options);
    await alert.present();
    return alert;
  }

  async loading(options?: LoadingOptions): Promise<HTMLIonLoadingElement> {
    const loading = await this.LoadCrtl.create({
      message: 'Carregando...',
      ...options,
    });
    await loading.present();
    return loading;
  }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCrtl.create({
      position: 'bottom',
      duration: 3000,
      buttons: [{ side: 'end', text: 'OK' }],
      ...options,
    });
    await toast.present();
    return toast;
  }
}

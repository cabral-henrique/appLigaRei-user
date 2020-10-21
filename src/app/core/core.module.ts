import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';
import { Camera } from '@ionic-native/camera/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@NgModule({
  imports: [IonicModule.forRoot({ mode: 'ios' })],
  exports: [BrowserModule, HttpClientModule, IonicModule, BrMaskerModule],
  providers: [
    StatusBar,
    Camera,
    ScreenOrientation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class CoreModule { }

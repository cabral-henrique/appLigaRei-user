import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabConvocarPageRoutingModule } from './tab-convocar-routing.module';

import { TabConvocarPage } from './tab-convocar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabConvocarPageRoutingModule
  ],
  declarations: [TabConvocarPage]
})
export class TabConvocarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRankingPageRoutingModule } from './tab-ranking-routing.module';

import { TabRankingPage } from './tab-ranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRankingPageRoutingModule
  ],
  declarations: [TabRankingPage]
})
export class TabRankingPageModule {}

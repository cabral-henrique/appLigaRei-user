import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRankingPage } from './tab-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: TabRankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRankingPageRoutingModule {}

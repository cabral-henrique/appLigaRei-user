import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabConvocarPage } from './tab-convocar.page';

const routes: Routes = [
  {
    path: '',
    component: TabConvocarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabConvocarPageRoutingModule {}

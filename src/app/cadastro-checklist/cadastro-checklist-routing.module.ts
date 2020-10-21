import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroChecklistPage } from './cadastro-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroChecklistPageRoutingModule {}

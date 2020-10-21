import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroChecklistPageRoutingModule } from './cadastro-checklist-routing.module';

import { CadastroChecklistPage } from './cadastro-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroChecklistPageRoutingModule
  ],
  declarations: [CadastroChecklistPage]
})
export class CadastroChecklistPageModule {}

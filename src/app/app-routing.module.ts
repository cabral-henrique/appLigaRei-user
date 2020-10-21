import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tab-home',
    loadChildren: () => import('./tab-home/tab-home.module').then(m => m.TabHomePageModule)
  },
  {
    path: 'tab-ranking',
    loadChildren: () => import('./tab-ranking/tab-ranking.module').then(m => m.TabRankingPageModule)
  },
  {
    path: 'tab-convocar',
    loadChildren: () => import('./tab-convocar/tab-convocar.module').then(m => m.TabConvocarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'cadastrodados',
    loadChildren: () => import('./cadastro-dados/cadastro-dados.module').then(m => m.CadastroDadosPageModule)
  },
  {
    path: 'cadastroendereco',
    loadChildren: () => import('./cadastro-endereco/cadastro-endereco.module').then(m => m.CadastroEnderecoPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'cadastro-dados',
    loadChildren: () => import('./cadastro-dados/cadastro-dados.module').then(m => m.CadastroDadosPageModule)
  },
  {
    path: 'cadastro-endereco',
    loadChildren: () => import('./cadastro-endereco/cadastro-endereco.module').then(m => m.CadastroEnderecoPageModule)
  },
  {
    path: 'cadastro-checklist',
    loadChildren: () => import('./cadastro-checklist/cadastro-checklist.module').then(m => m.CadastroChecklistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../tab-home/tab-home.module').then((m) => m.TabHomePageModule),
      },
      {
        path: 'ranking',
        loadChildren: () => import('../tab-ranking/tab-ranking.module').then((m) => m.TabRankingPageModule),
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'convocar',
        loadChildren: () => import('../tab-convocar/tab-convocar.module').then((m) => m.TabConvocarPageModule),
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }

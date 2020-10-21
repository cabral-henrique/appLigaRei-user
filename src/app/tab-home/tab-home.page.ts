import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    const tabBarlogado = document.getElementById('logado');
    if (tabBarlogado !== null) {
      tabBarlogado.style.display = 'flex';
    }
  }

}

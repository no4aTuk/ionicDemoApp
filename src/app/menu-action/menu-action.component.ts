import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-action',
  templateUrl: './menu-action.component.html',
  styleUrls: ['./menu-action.component.scss'],
})
export class MenuActionComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}


  menuClick() {
    console.log("menu click");
    this.menu.toggle("app-menu")
  }

  openCustom() {
    this.menu.enable(true, 'app-menu');
    this.menu.open('app-menu');
  }
}

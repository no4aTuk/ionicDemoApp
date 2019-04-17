import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  icons: string[] = [
    'logo-android',
    'logo-apple',
    'logo-html5',
    'logo-github'
  ];

  colors: string[] = [
    'green',
    'lightgray',
    'red',
    'white'
  ];

  slideOpts = {
    loop: true,
    preloadImages: true,
    updateOnImagesReady: true,
    spaceBetween: 16
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  openUserList() {
    this.router.navigate(["home/user-list"]);
  }
}

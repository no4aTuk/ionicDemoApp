import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Keyboard]
})
export class LoginComponent implements OnInit {

  @ViewChild('videoPlayer') mVideoPlayer: ElementRef;

  private user: User

  private _login: String = ""
  private _password: String = ""

  constructor(private router: Router, private kb: Keyboard) { }

  ngOnInit() {}

  ionViewDidEnter() {
    let video = this.mVideoPlayer.nativeElement;
    video.play();
  }

  loginChanged(input: String) {
    this._login = input;
    this.checkLogin();
  }

  passwordChanged(input: String) {
    this._password = input;
    this.checkLogin();
  }

  private checkLogin() {
    if (this._login.length == 10 && this._password.length == 5) {
      this.login();
    }
  }

  private login() {
    this.kb.hide();
    this.router.navigate(['home']);
  }
}

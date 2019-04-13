import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('videoPlayer') mVideoPlayer: ElementRef;

  constructor() { }

  ngOnInit() {}

  ionViewDidLoaded() {
    let video = this.mVideoPlayer.nativeElement;
    video.play();
  }
}

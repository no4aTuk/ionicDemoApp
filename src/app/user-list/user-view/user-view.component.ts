import { Component, Input, OnChanges } from "@angular/core";
import {  People} from "../../models/people";

@Component({
    selector: 'user-view',
    templateUrl: 'user-view.component.html'
  })
  export class UserViewComponent implements OnChanges {
    @Input() user: People;

    avatarUrl: string;

    avatars: string[] = [
      "anime.jpeg",
      "ava.jpeg",
      "biuty.jpeg",
      "boy.jpeg",
      "enot.png",
      "mem.png",
      "mouse.jpeg",
      "skull.png",
      "solder.jpeg"
    ];

    ngOnChanges() {
      if (!this.user) { return; }
      let avatarIndex = Math.floor(Math.random()*this.avatars.length)
      this.avatarUrl = this.avatars[avatarIndex]
    }

    click(user: People) {
        console.log("clikc user: ", user.name);
    }
  }
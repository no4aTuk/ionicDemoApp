import { Component, Input } from "@angular/core";
import {  User} from "../../models/user";

@Component({
    selector: 'user-view',
    templateUrl: 'user-view.component.html'
  })
  export class UserViewComponent {
    @Input() user: User;

    click(user: User) {
        console.log("clikc user: ", user.name);
    }
  }
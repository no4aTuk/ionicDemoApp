import { Component, ViewChild } from '@angular/core';
import { User } from "../models/user";
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  initialUsers: User[] = [
    new User("bob", 12),
    new User("alice", 22),
    new User("scot", 42),
    new User("andrew", 9),
    new User("matteo", 14),
    new User("looper", 19),
    new User("cristian", 25),
    new User("miranda", 39),
    new User("olegsey", 31),
    new User("kyoto", 29),
    new User("jeky", 20),
    new User("jhon", 40),
    new User("silver", 32)
  ]

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  users: User[] = this.initialUsers;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      this.users = this.users.concat(this.initialUsers);
      if (this.users.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}

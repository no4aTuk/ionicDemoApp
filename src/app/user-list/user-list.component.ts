import { Component, ViewChild } from '@angular/core';
import { People } from "../models/people";
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent {
  initialUsers: People[] = [
    new People("Екатерина К.", 12),
    new People("Алиса Б.", 22),
    new People("Скотт А.", 42),
    new People("Андрей У.", 9),
    new People("Маттео В.", 14),
    new People("Лупер Р.", 19),
    new People("Кристина Ш.", 25),
    new People("Миранда П.", 39),
    new People("Алекс Т.", 31),
    new People("Киото К.", 29),
    new People("Джекки Ч.", 20),
    new People("Джой А.", 40),
    new People("Сильвер Д.", 12),
    new People("Орандж Н.", 32),
    new People("Пурпл М.", 29),
    new People("Грин Г.", 52),
    new People("Грей Д.", 26),
    new People("Песель А.", 16),
    new People("Большой смоук У.", 30),
    new People("Си Джей С.", 13)
  ]

  isSearchMode: boolean = false;
  searchString: string = "";

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  users: People[] = this.initialUsers;

  getUsers(): People[] {
    if (this.isSearchMode && this.searchString.length > 0) {
      return this.users.filter((user, index, array) => {
        return user.name.includes(this.searchString);
      })
    } else {
      return this.users;
    }
  }

  constructor() {}

  doRefresh(event) {
    this.users = this.initialUsers;
  }

  setSearchMode() {
    console.log("search mode on");
    this.isSearchMode = true;
  }

  onSearchChanged(event: any) {    
    let input: Promise<HTMLInputElement> = event.target.getInputElement();
    input.then(value => {
      console.log("search text:", value.value); 
      this.searchString = value.value;
    });
  }

  clearText() {
    console.log("search mode off");
    this.isSearchMode = false;
  }

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
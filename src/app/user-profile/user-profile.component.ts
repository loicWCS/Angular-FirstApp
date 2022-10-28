import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  fiche: string = 'Fiche de contact';
  // user = {
  //   name: 'Doe',
  //   firstName: 'John',
  //   age: 25,
  //   quote: 'beer or not to beer',
  //   photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  // };
  isDisplay: boolean = true;
  toggle() {
    this.isDisplay = !this.isDisplay;
  }

  firstUser: User = new User({
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  });
  constructor() {}

  ngOnInit(): void {}
}
export interface UserInterface {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
}
export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  constructor({ name, firstName, age, quote, photo }: UserInterface) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}

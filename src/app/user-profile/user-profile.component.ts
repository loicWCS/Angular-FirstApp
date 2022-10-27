import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  fiche: string = 'Fiche de contact';
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  isDisplay: boolean = true;
  toggle() {
    this.isDisplay = !this.isDisplay;
  }
  constructor() {}

  ngOnInit(): void {}
}

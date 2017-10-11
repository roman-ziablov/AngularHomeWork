import { Component, OnInit } from '@angular/core';
import { Users } from './../../services/user.service';

import { remove as _remove  } from 'lodash';


@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css']
})
export class UsersGeneratorComponent implements OnInit {

  public loadedUsers = null;
  public isLoading = false;

  constructor(
    private Users: Users
  ) { }

  ngOnInit() {

  }


  public getUsers() {
    if (this.isLoading) {
      return;
    }


    this.loadedUsers = null;
    this.isLoading = true;

    this.Users.getUsers()
    .then((users) => {
      this.loadedUsers = users;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  public removeUser(userEmail) {
    console.log(userEmail);
    _remove(this.loadedUsers, { email: userEmail});
  }
}
import { Component, OnInit } from '@angular/core';
import {  UsersService } from '../service/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(public userService: UsersService) { }
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers () {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

}

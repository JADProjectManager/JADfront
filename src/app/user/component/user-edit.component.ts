import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/user.service';
import { User } from '../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
    ) { }

  ngOnInit() {
    this.user = new User();
    let id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe (user => this.user = user);
  }


  updateUser () {
    this.userService.updateUser(this.user);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/user.service';
import { User } from '../model/user.model';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {

  user: User;
  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.user = new User();
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.userService.getUser(id).subscribe(user => {
        this.form.reset ({
          name: user.name,
          username: user.username,
          email: user.email
        });
        return this.user = user})
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }

  updateUser() {
    if (this.form.valid) {
      this.user.username = this.form.value.username;
      this.user.email = this.form.value.email;
      this.user.name = this.form.value.name;
      this.userService.updateUser(this.user).subscribe();
    }
  }

  getErrorMessage(formControl: AbstractControl | FormControl): string {
    return formControl.hasError('required')
      ? 'required'
        : formControl.hasError('email')
          ? 'email'
          : null
  }
}

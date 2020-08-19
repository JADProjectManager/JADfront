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
      id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      passwordGroup: new FormGroup({
        password: new FormControl(''),
        repeatPassword: new FormControl('')
      }, {validators: this.checkPasswords}),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      roles: new FormControl([], [Validators.required]),
    })
  }

  ngOnInit() {
    this.user = new User();
    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.userService.getUser(id).subscribe(user => this.user = user)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }


  updateUser() {
    if (this.form.valid) {
      const user = new User()
      user.username = this.form.value.username;
      user.password = this.form.value.password;
      user.email = this.form.value.email;
      user.password = this.form.value.passwordGroup.password;
      user.id = this.form.value.id;
      user.roles = this.form.value.roles;
      this.userService.updateUser(user);
    }
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value
    const repeatPassword = group.get('repeatPassword').value
    return !repeatPassword
      ? {required: true}
      : password !== repeatPassword
        ? {notSame: true}
        : null
  }

  getErrorMessage(formControl: AbstractControl | FormControl): string {
    return formControl.hasError('required')
      ? 'required'
      : formControl.hasError('notSame')
        ? 'notSame'
        : formControl.hasError('email')
          ? 'email'
          : null
  }
}

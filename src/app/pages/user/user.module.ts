import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const route = [
    {path: '', component: UserComponent},
    {path: 'edit', component: UserEditComponent}
];

@NgModule({
    declarations: [UserComponent, UserEditComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ]
})
export class UserModule {
}

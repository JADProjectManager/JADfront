import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';

const route = [
    {path: '', component: UserComponent}
];

@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ]
})
export class UserModule {
}

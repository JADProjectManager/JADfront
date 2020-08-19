import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutRoutes } from './main-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LandingComponent } from '../../landing/landing.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProjecRequestComponent } from '../../project-request/component/project-request.component';
import { UserListComponent } from '../../user/component/user-list.component';
import { UserEditComponent } from '../../user/component/user-edit.component';
import { SigninComponent } from '../../signin/signin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    SigninComponent,
    LandingComponent,
    DashboardComponent,
    ProjecRequestComponent,
    UserListComponent,
    UserEditComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
  ]
})

export class MainLayoutModule {}

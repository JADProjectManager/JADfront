import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProjecRequestComponent } from '../../project-request/component/project-request.component';
import { UserListComponent } from '../../user/component/user-list.component';
import { UserEditComponent } from '../../user/component/user-edit.component';
import { LandingComponent } from '../../landing/landing.component';
import { SigninComponent } from '../../signin/signin.component';

export const MainLayoutRoutes: Routes = [
    { path: 'landing',        component: LandingComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'project-request',component: ProjecRequestComponent},
    { path: 'user-admin',     component: UserListComponent},
    { path: 'user-new',       component: UserEditComponent},
    { path: 'user-edit/:id',  component: UserEditComponent},
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'login',          component: SigninComponent },
];

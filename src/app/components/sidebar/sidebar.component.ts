import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    visibility: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/landing', title: 'Welcome',  icon: 'landing', class: '', visibility: 'public'  },
    { path: '/login', title: 'Log In',  icon: 'landing', class: '', visibility: 'public'  },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', visibility: 'authorized' },
    { path: '/project-request', title: 'Project Requests', icon: 'archive', class: '', visibility: 'authorized'},
    { path: '/user-admin', title: 'Users', icon: 'persons', class: '', visibility: 'authorized'},
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '', visibility: 'authorized' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '', visibility: 'authorized' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '', visibility: 'authorized' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '', visibility: 'authorized' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '', visibility: 'authorized' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '', visibility: 'authorized' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro', visibility: 'authorized' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  privateMenuItems: any[];
  publicMenuItems: any []
  constructor() { }

  ngOnInit() {
    this.privateMenuItems = ROUTES.filter(menuItem => (menuItem.visibility == 'authorized'));
    this.publicMenuItems = ROUTES.filter(menuItem => (menuItem.visibility == 'public'));

  }

  isAuthenticated () {

  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

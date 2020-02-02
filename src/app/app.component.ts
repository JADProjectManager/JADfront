import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './services/users/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'JADfront';

    constructor() {
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
    }
}

import {Injectable} from '@angular/core';
import {Options, ServiceRestBase} from '../../shared/service-base';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService extends ServiceRestBase<User> {


    constructor(http: HttpClient) {
        super('/api/users', http);
    }

    getUsers(options?: Options): Observable<User[]> {
        return super.getAll(options);
    }

    getUser(id: string, options?: Options): Observable<User> {
        return super.getOne(id, options);
    }

    createUser(objToCreate: any | User, options?: Options): Observable<User[] | User> {
        return super.create(objToCreate, options);
    }

    deleteUser(objToDelete, options?: Options): Observable<User[] | User> {
        return super.delete(objToDelete, options);
    }

    updateUser(objToUpdate: any | User, options?: Options): Observable<User[] | User> {
        return super.update(objToUpdate, options);
    }

}

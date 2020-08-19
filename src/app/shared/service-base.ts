import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export interface Options {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: any;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType: any;
        withCredentials?: boolean;
}

export class ServiceRestBase<T> {

    private _apiUrl: string;
    private _endpoint: string;

    constructor(endpoint: string, private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
        this.endpoint = endpoint;

    }

    get url() {
        return `${this._apiUrl}${this._endpoint}`;
    }

    set apiUrl(value: string) {
        this._apiUrl = value;
    }

    set endpoint(value: string) {
        this._endpoint = value;
    }

    getOne(id: string, options?: Options ): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`, options);
    }
    getAll(options?: Options ): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}`, options);
    }
    create(objToCreate: T | any, options?: Options ): Observable<T | T[]> {
        return this.http.post<T | T[]>(`${this.url}`, objToCreate, options);
    }

    update(objToUpdate: T | any, options?: Options ): Observable<T | T[]> {
        console.log (`${this.url}/${objToUpdate.id}`);
        return this.http.get<T[]>(`${this.url}`, options);
    }

    delete(objToDelete, options?: Options ): Observable<T | T[]> {
        return this.http.delete<T | T[]>(`${this.url}/${objToDelete.id}`, options);
    }

}

import {Injectable} from '@angular/core';
import {Options, ServiceRestBase} from '../../shared/service-base';
import {ProjectRequest} from '../model/project-request.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectRequestService extends ServiceRestBase<ProjectRequest> {

    constructor(http: HttpClient) {
        super('/api/projectrequest', http);
    }

    getProjectRequests(options?: Options): Observable<ProjectRequest[]> {
        return super.getAll(options);
    }

    getProjectRequest(id: string, options?: Options): Observable<ProjectRequest> {
        return super.getOne(id, options);
    }

    createProjectRequest(objToCreate: any | ProjectRequest, options?: Options): Observable<ProjectRequest[] | ProjectRequest> {
        return super.create(objToCreate, options);
    }

    deleteProjectRequest(objToDelete, options?: Options): Observable<ProjectRequest[] | ProjectRequest> {
        return super.delete(objToDelete, options);
    }

    updateProjectRequest(objToUpdate: any | ProjectRequest, options?: Options): Observable<ProjectRequest[] | ProjectRequest> {
        return super.update(objToUpdate, options);
    }

}

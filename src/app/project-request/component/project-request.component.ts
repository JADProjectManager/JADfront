import { Component, OnInit } from '@angular/core';
import { ProjectRequestService } from '../service/project-request.service'
import { ProjectRequest } from '../model/project-request.model';

@Component({
  selector: 'app-project-request',
  templateUrl: './project-request.component.html',
  styleUrls: ['./project-request.component.css']
})
export class ProjecRequestComponent implements OnInit {

  projectRequests : ProjectRequest[] ;

  constructor(public projectRequestService: ProjectRequestService
    ) { }
  
  ngOnInit() {
    this.getProjectRequests();
  }

  getProjectRequests () {
    this.projectRequestService.getProjectRequests()
    .subscribe(projectRequests => this.projectRequests = projectRequests);
  }

}

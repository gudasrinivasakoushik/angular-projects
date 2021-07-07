import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { WebwebService } from '../services/webweb.service';

@Component({
  selector: 'app-webweb',
  templateUrl: './webweb.component.html',
  styleUrls: ['./webweb.component.css']
})
export class WebwebComponent  {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:WebwebService){
    proService.getallwebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

}

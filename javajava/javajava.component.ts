import { Component, OnInit } from '@angular/core';
import { JavajavaService } from '../services/javajava.service';


@Component({
  selector: 'app-javajava',
  templateUrl: './javajava.component.html',
  styleUrls: ['./javajava.component.css']
})
export class JavajavaComponent  {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:JavajavaService){
    proService.getalljavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

}

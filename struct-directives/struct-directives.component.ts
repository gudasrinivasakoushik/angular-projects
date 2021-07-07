import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent  {

  showElement:boolean = false;
  course:string = "java";
  employees = [
    {empId:1011, empName:'koushik'},
    {empId:1111, empName:'javeed'},
  ]
}

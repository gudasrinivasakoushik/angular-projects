import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suresh',
  templateUrl: './suresh.component.html',
  styleUrls: ['./suresh.component.css']
})
export class SureshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'suresh';
  age:number = 21;
}

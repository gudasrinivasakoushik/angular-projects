import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'koushik',
  templateUrl: './koushik.component.html',
  styleUrls: ['./koushik.component.css']
})
export class KoushikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'koushik';
  age:number = 21;
  customer = {
    id : 5736,
    name : 'srinivasakosuhik',
    b : true,
    arr : [17, 18, 19],
    diffarr: [[5737,'subha'], [5738,'basha'], [5739,'javeed']],
    
  }
}

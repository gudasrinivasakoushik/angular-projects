import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data12Service } from '../services/data12.service';

@Component({
  selector: 'app-first12',
  templateUrl: './first12.component.html',
  styleUrls: ['./first12.component.css']
})
export class First12Component implements OnInit {

  customerss:any=[]
 customerss1:any=[
  {"productid":1,"productName":"bat","price":2500},
  {"productid":2,"productName":"ball","price":90},
  {"productid":3,"productName":"wickets","price":400}
 ]

  constructor(private dataService:Data12Service) {

  }
  ngOnInit(): void {
    this.dataService.currentMsg.subscribe((successMsg: any) => this.customerss = successMsg)
   }
  modifiedData(){
  // this.customerss.push({"productid":1,"productName":"bat","price":2500})
  //  this.customerss.push({"productid":2,"productName":"ball","price":90})
  // this.customerss.push({"productid":3,"productName":"wickets","price":400})

    //for(var c of this.customerss)
    //this.dataService.changeData(c)

    for(var i=0;i<this.customerss1.length;i++){
      this.dataService.changeData(this.customerss1[i])
       }

  }

}

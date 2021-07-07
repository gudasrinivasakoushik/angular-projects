import { Component, OnInit } from '@angular/core';

import { Data12Service } from '../services/data12.service';

@Component({
  selector: 'app-second12',
  templateUrl: './second12.component.html',
  styleUrls: ['./second12.component.css']
})
export class Second12Component implements OnInit {

  customerss:any=[]
  customerss1:any=[
    {"productid":4,"productName":"helmet","price":5000},
    {"productid":5,"productName":"pads","price":2300},
    {"productid":6,"productName":"gloves","price":2800}
  ]





  constructor(private dataService:Data12Service) {
    dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


     // this.customerss.push( {"empId":104,"empName":"prem","price":20000})
     // this.customerss.push( {"empId":105,"empName":"kumar","price":19000})
      //this.customerss.push( {"empId":106,"empName":"kedari","price":18000})


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }


}

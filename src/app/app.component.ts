import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Insurance';
  val:Boolean=false;
  value:number;
  employees:Employee[]=[
    {
      empId:1001,empName:"Deesha",empDesig:"Programmer",empSalary:1000
    },
    {
      empId:1002,empName:"Krish",empDesig:"Trainer",empSalary:3000
    },
    {
      empId:1003,empName:"Nisha",empDesig:"Manager",empSalary:100000
    },
    {
      empId:1004,empName:"Deepu",empDesig:"Test Engineer",empSalary:10000
    }
  ];
  
  change(){
    this.value=0;
  }
}



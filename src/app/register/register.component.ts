import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  addr:Address=new Address();
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    console.log(JSON.stringify(this.user));
    console.log(JSON.stringify(this.addr));
  }

}

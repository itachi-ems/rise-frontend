import { Component, OnInit, Pipe } from '@angular/core';
import{ Router } from '@angular/router'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username="";
  password="";
  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  color:string ="white";
   gotopage(page1:string):void{
   this.router.navigate([`${page1}`])
   }
    // gotopage(Pipe:string):void{
    //   this.router.navigate([`${pipe}`])
    // }
  onSubmit(f:any):void {

    alert("Login successful");
  }
  Multiplestyles={
    
    'background':this.color,
    'border':'3px solid black',
    
  }
}

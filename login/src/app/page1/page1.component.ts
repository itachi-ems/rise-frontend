import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import * as $ from "jquery";
import { event } from 'jquery';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  color:string='white';
  constructor() { }
  name1="";
  name2="";
  name3="";
  name:any={
    'name1':"",
    'name2':"",
    'name3':""
  };
   @Output() customevent=new EventEmitter();
  ngOnInit(): void {
  }
  Testing(){
    
    
  }
  onSubmit(f:any):void {
    this.customevent.emit(this.name);
    alert(JSON.stringify(this.name));
    
    
  }
  
  
  Multiplestyles={
    'background':this.color,
    'border':'3px solid black',
    
  }
}

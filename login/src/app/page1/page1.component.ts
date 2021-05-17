import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  color:string='white';
  constructor() { }

  ngOnInit(): void {
  }
  Testing(){
    var name1 = $("#txtname1").val();
    var name2 = $("#txtname2").val();
    var name3 = $("#txtname3").val();
    alert("welcome : " + name1 + " " + name2 + " " + name3);
  }
  onSubmit(f:any):void {

    
  }
  Multiplestyles={
    'background':this.color,
    'border':'3px solid black',
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  custom(event:any){
    event.fullname=event.name1 + ' ' + event.name2 + ' ' + event.name3;
  
  }
}

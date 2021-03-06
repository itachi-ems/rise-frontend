import { PipeComponent } from '../app/pipe/pipe.component';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from '../app/page1/page1.component'


const routes: Routes = [
  {path:"",component:LoginFormComponent},
  {path:"page1",component:Page1Component},
  {path:"Pipe",component:PipeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

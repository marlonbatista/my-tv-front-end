import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }

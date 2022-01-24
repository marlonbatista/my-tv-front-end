import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { MessageModule } from '../component/message/message.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialAngularModule,
    MessageModule
  ],
  exports:[
    MaterialAngularModule,
    MessageModule
  ]
})
export class SharedModule { }

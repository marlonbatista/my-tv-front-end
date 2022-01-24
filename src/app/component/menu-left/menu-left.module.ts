import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { MenuLeftComponent } from './menu-left.component';



@NgModule({
  declarations: [

    MenuLeftComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[MenuLeftComponent],
})
export class MenuLeftModule { }

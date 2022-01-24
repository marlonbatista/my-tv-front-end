import { SharedModule } from './../../shared/shared.module';
import { PosterNewModule } from './../poster-new/poster-new.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTitleComponent } from './list-title.component';



@NgModule({
  declarations: [
    ListTitleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PosterNewModule,
  ],
  exports: [ListTitleComponent]
})
export class ListTitleModule { }

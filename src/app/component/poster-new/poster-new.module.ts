import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { PosterNewComponent } from './poster-new.component';



@NgModule({
  declarations: [
    PosterNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PosterNewComponent
  ]
})
export class PosterNewModule { }

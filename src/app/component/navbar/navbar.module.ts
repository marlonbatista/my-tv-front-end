import { MenuLeftModule } from './../menu-left/menu-left.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MenuLeftModule,
    SharedModule,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }

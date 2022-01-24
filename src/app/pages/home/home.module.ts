import { TitleModule } from './../../component/title/title.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from './../../component/footer/footer.module';
import { ListTitleModule } from './../../component/list-title/list-title.module';
import { NavbarModule } from './../../component/navbar/navbar.module';
import { SharedModule } from './../../shared/shared.module';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, FormRegisterComponent],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule,
    HomeRoutingModule,
    ListTitleModule,
    NavbarModule,
    SharedModule,
    TitleModule,
    ReactiveFormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }

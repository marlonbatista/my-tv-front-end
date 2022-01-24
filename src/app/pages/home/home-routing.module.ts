import { ListTitleResolver } from './../../component/list-title/list-title.resolver';
import { FormRegisterComponent } from './form-register/form-register.component';
import { ListTitleComponent } from './../../component/list-title/list-title.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListTitleComponent,
        resolve: {
          titles: ListTitleResolver
        }
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: FormRegisterComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

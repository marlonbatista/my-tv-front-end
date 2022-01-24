import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { AuthenticationGuard } from './component/authentication/authentication.guard';

const routes: Routes = [
  // { path: '',  pathMatch: 'full', redirectTo:'home'},
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', loadChildren: () => import('./errors/errors.module').then(e=> e.ErrorsModule)},
  { path: '', loadChildren: () => import('./pages/detail/detail.module').then(d => d.DetailModule), canLoad: [AuthenticationGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

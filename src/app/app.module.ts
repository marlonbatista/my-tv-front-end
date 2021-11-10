import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componet/footer/footer.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { CardComponent } from './componet/card/card.component';
import { PosterComponent } from './componet/poster/poster.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    PosterComponent,
    LoginComponent,
    HomeComponent,
    PortifolioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationComponent } from './application/application.component';
import { HeaderComponent } from './layout/header/header.component';

import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from './layout/nav/nav.component';
import { ListeNinjaComponent } from './liste-ninja/liste-ninja.component';
import { ListeMissionsComponent } from './liste-missions/liste-missions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    HeaderComponent,
    NavComponent,
    ListeNinjaComponent,
    ListeMissionsComponent,
    AccueilComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

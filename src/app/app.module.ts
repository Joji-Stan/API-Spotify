import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AproposComponent } from './apropos/apropos.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ConcertsComponent } from './concerts/concerts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    MenuComponent,
    StatistiquesComponent,
    RechercheComponent,
    AproposComponent,
    SpotifyComponent,
    ConcertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ConcertsComponent } from './concerts/concerts.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ParolesComponent } from './paroles/paroles.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    MenuComponent,
    StatistiquesComponent,
    RechercheComponent,
    AproposComponent,
    ConcertsComponent,
    PlaylistComponent,
    ParolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';
import { AppComponent } from '../app.component';
import { ArtistModel, TrackModel } from '../artist-track';
import { ApiService } from '../api.service';



import SpotifyWebApi from 'spotify-web-api-js';
import * as $ from "jquery";



declare var require: any;
/* Accès à l'api Spotify JS */
const Spotify = require('spotify-web-api-js');
const s = new Spotify();
let spotify = new SpotifyWebApi();

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  @Input() token: string;
  @Input() isConnected: boolean;

    constructor( private service: ApiService) { }

    ngOnInit(): void {

      this.service.getAccessToken(this.token);
      console.log("STATISTIQUES-COMPONENT Token = " + this.token);
      spotify.setAccessToken(this.token);
      spotify.getMe().then(function(data) {
        /* On affiche le pseudo du compte Spotify connecté */
        var elem = document.getElementById("nom_user")
        if(typeof elem !== 'undefined' && elem !== null) {
        elem.innerHTML="Connecté en tant que : " + data.display_name;


      }
      })
      .catch(function(err) {
        console.log('Something went wrong:', err.message);
      });
      spotify.setAccessToken(this.token);
}


    statistiquesSons(duree: string): void  {

      if (duree=="short_term") {
      this.service.getTopArtist4Weeks()
     .subscribe((data: any) => {
       for (let i = 0; i < data.items.length; i++) {
         let info = {
           title: data.items[i].name,
           image: data.items[i].images[1].url,
           link: data.items[i].external_urls.spotify
         }
         console.log(info.title);
       }
     })


     this.service.getTopTrack4Weeks()
  .subscribe((data: any) => {
    console.log(data);
    for (let i = 0; i < data.items.length; i++) {
      let info = {
        title: data.items[i].name,
        artist: data.items[i].artists[0].name,
        image: data.items[i].album.images[1].url,
        link: data.items[i].external_urls.spotify
      }
    }
  })
   }

}
    }


    /*
        success: function(data) {
          console.log(duree);
          let taille = 25;
          let count = 1;
          while( count < taille){
    //        let saisieMinuscules = titre.toLowerCase();
    //        let titreMinuscules = data.tracks.items[count].name.toLowerCase();
      //    if(titreMinuscules==(saisieMinuscules) || saisieMinuscules=="") {
            var id = data.me.top[count].id;
      //    }
            /* AJOUT
            spotify.getMyTopArtists(id).then(
              function (data) {
                console.log(data);
              },
              function (err) {
                console.error(err);
              }
            );

            let src_str = `https://open.spotify.com/embed/track/${id}`;
            let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
            let parent_div = $('#song_'+ count);
            parent_div.html(iframe);
            count++;
          }
        }
      });
      */

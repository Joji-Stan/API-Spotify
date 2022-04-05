import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';
import { AppComponent } from '../app.component';
import { NONE_TYPE } from '@angular/compiler';
import * as $ from "jquery";
import SpotifyWebApi from 'spotify-web-api-js';



declare var require: any;
/* Accès à l'api Spotify JS */
const Spotify = require('spotify-web-api-js');
const s = new Spotify();
let spotify = new SpotifyWebApi();

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  @Input() token: string;
  @Input() isConnected: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("RECHERCHE-COMPONENT Token = " + this.token);
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

  }
  rechercheSons(artiste: string, titre: string): void{
  //  let raw_search_query = $('#son').val();
  //  raw_search_query = (raw_search_query || '').toString();
  //  let search_query = encodeURI(raw_search_query);
  /*
  var recherche;
  recherche = artiste
  console.log(artiste)
  if (artiste=="") {
    recherche = titre;
  }
  */
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${artiste}+${titre}&type=track`,
      type: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + this.token
      },
      success: function(data) {
        let num_of_tracks = data.tracks.items.length;
        let count = 1;
        const max_songs = 10;
        while(count < max_songs && count < num_of_tracks){
  //        let saisieMinuscules = titre.toLowerCase();
  //        let titreMinuscules = data.tracks.items[count].name.toLowerCase();

    //    if(titreMinuscules==(saisieMinuscules) || saisieMinuscules=="") {
          var id = data.tracks.items[count].id;
    //    }
          /* AJOUT */
          spotify.getTrack(id).then(
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
  }


}

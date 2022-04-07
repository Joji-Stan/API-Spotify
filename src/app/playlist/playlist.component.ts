import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { AccueilComponent } from "../accueil/accueil.component";
import { AppComponent } from "../app.component";
import { NONE_TYPE } from "@angular/compiler";

import * as $ from "jquery";
import SpotifyWebApi from "spotify-web-api-js";

declare var require: any;
/* Accès à l'api Spotify JS */
const Spotify = require("spotify-web-api-js");
const s = new Spotify();
let spotify = new SpotifyWebApi();

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.css"],
})
export class PlaylistComponent implements OnInit {
  //  On récupére le token
  @Input() token: string;
  @Input() isConnected: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log("RECHERCHE-COMPONENT Token = " + this.token);
    spotify.setAccessToken(this.token);
    spotify
      .getMe()
      .then(function (data) {
        /* On affiche le pseudo du compte Spotify connecté */
        var elem = document.getElementById("nom_user");
        if (typeof elem !== "undefined" && elem !== null) {
          elem.innerHTML = "Connecté en tant que : " + data.display_name;
          let user_id = data.id;
          console.log(data);
        }
      })

      .catch(function (err) {
        console.log("Something went wrong:", err.message);
      });
  }

  // Fonction qui permet de generer des sons pour ensuite les mettre dans la playlist
  genereSons(artiste: string, titre: string, genre: string, taille :string): void {
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${artiste}+${titre}&genre=${genre}&type=track`,
      type: "GET",
      headers: {
        Authorization: "Bearer " + this.token,
      },
      success: function (data) {
        let num_of_tracks = data.tracks.items.length;
        let count = 1;
        let tailleint = parseInt(taille);
        const max_songs = tailleint+1;
        while (count < max_songs && count < num_of_tracks) {

          var id = data.tracks.items[count].id;

          spotify.getTrack(id).then(
            function (data) {
              console.log(data);
            },
            function (err) {
              console.error(err);
            }
          );

          // Affichage des sons avec des iframe
          let src_str = `https://open.spotify.com/embed/track/${id}`;
          let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
          let parent_div = $("#song_" + count);
          parent_div.html(iframe);
          count++;
        }
      },
    });
  }

  // Fonction permettant de créer une playlist avec la méthode POST
  creePlaylist(): void {
    var jsonData = {
      name: "Création playlist",
      public: false,
    };
    let user_id;
    spotify.getMe().then(function (data) {
      user_id = data.id;
    });
    $.ajax({
      url: `https://api.spotify.com/v1/users/${user_id}/playlists`, //  mon user id : 21hbuqifxyv2oqduruc2plpoi
      type: "POST",
      data: jsonData,
      dataType: "json",
      headers: {
        Authorization: "Bearer " + this.token,
      },
      contentType: "application/json",
      success: function (result) {
        // console.log("Ca marche");
      },
      error: function () {
      },
    });
  }
}

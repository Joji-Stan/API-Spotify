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
import { ArtistModel, TrackModel } from "../artist-track";
import { ApiService } from "../api.service";

import SpotifyWebApi from "spotify-web-api-js";
import * as $ from "jquery";

declare var require: any;
/* Accès à l'api Spotify JS */
const Spotify = require("spotify-web-api-js");
const s = new Spotify();
let spotify = new SpotifyWebApi();

@Component({
  selector: "app-statistiques",
  templateUrl: "./statistiques.component.html",
  styleUrls: ["./statistiques.component.css"],
})
export class StatistiquesComponent implements OnInit {
  @Input() token: string;
  @Input() isConnected: boolean;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getAccessToken(this.token);
    console.log("STATISTIQUES-COMPONENT Token = " + this.token);
    spotify.setAccessToken(this.token);
    spotify
      .getMe()
      .then(function (data) {
        /* On affiche le pseudo du compte Spotify connecté */
        var elem = document.getElementById("nom_user");
        if (typeof elem !== "undefined" && elem !== null) {
          elem.innerHTML = "Connecté en tant que : " + data.display_name;
        }
      })
      .catch(function (err) {
        console.log("Something went wrong:", err.message);
      });
    spotify.setAccessToken(this.token);
  }

  statistiquesSons(duree: string): void {
    // Pour 4 semaines, prend les top artist et top titres
    if (duree == "short_term") {
      this.service.getTopArtist4Weeks().subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify,
          };
          console.log(info.title);
        }
      });

      this.service.getTopTrack4Weeks().subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify,
          };
        }
      });
    }
    // Pour 6 mois, prend les top artist et top titres
    if (duree == "medium_term") {
      this.service.getTopArtist6Months().subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify,
          };
          console.log(info.title);
        }
      });

      this.service.getTopTrack6Months().subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify,
          };
        }
      });
    }

    // Pour depuis toujours, prend les top artist et top titres
    if (duree == "long_term") {
      this.service.getTopArtistAllTime().subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify,
          };
          console.log(info.title);
        }
      });

      this.service.getTopTrackAllTime().subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify,
          };
        }
      });
    }
  }
}

import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

import * as $ from "jquery";

import SpotifyWebApi from "spotify-web-api-js";

declare var require: any;
/* Accès à l'api Spotify JS */
const Spotify = require("spotify-web-api-js");
const s = new Spotify();
let spotify = new SpotifyWebApi();

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"],
})
export class AccueilComponent implements OnInit {
  /* Pour savoir quel menu va être visible */
  isVisibleAccueil: boolean;
  isVisiblePlaylist: boolean;
  isVisibleRecherche: boolean;
  isVisibleConcerts: boolean;
  isVisibleStatistiques: boolean;
  isVisibleParoles: boolean;
  isVisibleContact: boolean;
  isVisibleAPropos: boolean;

  /* Le token de connexion du client Spotify */
  token: string;
  sParam: string | undefined;
  raw_search_query: string | undefined;

  // Pour savoir si on est bien connecté
  isConnected: boolean;

  /* Outil de communication entre l'Accueil et le menu de navigation*/
  @Output() changementMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // On affiche que l'accueil quand on arrive sur le site
    this.isVisibleAccueil = true;
    this.isVisiblePlaylist = false;
    this.isVisibleRecherche = false;
    this.isConnected = false;
    this.isVisibleStatistiques = false;
    this.isVisibleParoles = false;
    this.isVisibleConcerts = false;
    this.isVisibleContact = false;
    this.isVisibleAPropos = false;
    console.log("ACCUEIL-COMPONENT Token = " + (this.token || "").toString());
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

  /**
   * Permet de communiquer avec le menu et qui permet d'acceder aux parties du site
   * @param dir La partie du site auquel on veut accéder
   */
  changementAccueil(dir: string): void {
    this.hide();
    this.hide_all();
    switch (dir) {
      case "accueil":
        this.accederAccueil_Event();
        break;
      case "infos":
        this.accederStatistiques_Event();
        break;
      case "playlist":
        this.accederplaylist_Event();
        break;
      case "recherche":
        this.accederRecherche_Event();
        break;
      case "paroles":
        this.accederParoles_Event();
        break;
      case "concerts":
        this.accederConcerts_Event();
        break;
      case "contact":
        this.accederContact_Event();
        break;
      case "apropos":
        this.accederApropos_Event();
        break;
      default:
        break;
    }
  }
  // Masquer l'accueil
  hide(): void {
    this.isVisibleAccueil = false;
  }

  // Masquer tout sauf l'accueil
  hide_all(): void {
    this.isVisiblePlaylist = false;
    this.isVisibleRecherche = false;
    this.isVisibleStatistiques = false;
    this.isVisibleConcerts = false;
    this.isVisibleContact = false;
    this.isVisibleParoles = false;
    this.isVisibleAPropos = false;
  }

  /**
   * Permet d'accéder à l'accueil et de transmettre l'information au menu de navigation
   */
  accederAccueil(): void {
    this.isVisibleAccueil = true;
    this.hide_all();
    this.changementMenu.emit("accueil");
  }

  /**
   * Permet d'accéder à playlist et de transmettre l'information au menu de navigation
   */
  accederplaylist(): void {
    this.hide();
    this.isVisiblePlaylist = true;
    this.changementMenu.emit("playlist");
  }
  /**
   * Permet d'accéder aux statistiques et de transmettre l'information au menu de navigation
   */
  accederStatistiques(): void {
    this.hide();
    this.isVisibleStatistiques = true;
    this.changementMenu.emit("statistiques");
  }
  /**
   * Permet d'accéder aux concerts et de transmettre l'information au menu de navigation
   */
  accederConcerts(): void {
    this.hide();
    this.isVisibleConcerts = true;
    this.changementMenu.emit("concerts");
  }
  /**
   * Permet d'accéder à recherche et de transmettre l'information au menu de navigation
   */
  accederRecherche(): void {
    this.hide();
    this.isVisibleRecherche = true;
    this.changementMenu.emit("recherche");
  }

  /**
   * Permet d'accéder aux paroles et de transmettre l'information au menu de navigation
   */
  accederParoles(): void {
    this.hide();
    this.isVisibleParoles = true;
    this.changementMenu.emit("paroles");
  }

  /**
   * Action quand réception d'un message du menu de navigation : accès aux paroles
   */
  accederParoles_Event(): void {
    this.hide();
    this.isVisibleParoles = true;
  }
  /**
   * Permet d'accéder au formulaire de contact et de transmettre l'information au menu de navigation
   */
  accederContact(): void {
    this.hide();
    this.isVisibleContact = true;
    this.changementMenu.emit("contact");
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès à l'accueil
   */
  accederAccueil_Event(): void {
    this.isVisibleAccueil = true;
    this.hide_all();
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès à playlist
   */
  accederplaylist_Event(): void {
    this.hide();
    this.isVisiblePlaylist = true;
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès aux statistiques
   */
  accederStatistiques_Event(): void {
    this.hide();
    this.isVisibleStatistiques = true;
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès aux concerts
   */
  accederConcerts_Event(): void {
    this.hide();
    this.isVisibleConcerts = true;
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès à la recherche
   */
  accederRecherche_Event(): void {
    this.hide();
    this.isVisibleRecherche = true;
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès au formulaire de contact
   */
  accederContact_Event(): void {
    this.hide();
    this.isVisibleContact = true;
  }
  /**
   * Permet d'accéder à l'à propos et de transmettre l'information au menu de navigation
   */
  accederApropos(): void {
    this.hide();
    this.isVisibleAPropos = true;
    this.changementMenu.emit("apropos");
  }
  /**
   * Action quand réception d'un message du menu de navigation : accès à l'à propos
   */
  accederApropos_Event(): void {
    this.hide();
    this.isVisibleAPropos = true;
  }

  // Afficher le token
  afficherToken(): void {
    console.log("ACCUEIL-COMPONENT Token = " + this.token);
  }
  /**
   * Permet de se connecter à l'API SPOTIFY
   */
  loginSpotify(): void {
    // Fonction qui permet d' extraite le token client de l 'URL du Site
    const getUrlParameter = (sParam: string) => {
      let sPageURL = window.location.search.substring(1),
        sURLVariables =
          sPageURL != undefined && sPageURL.length > 0
            ? sPageURL.split("#")
            : [],
        sParameterName,
        i;
      let split_str =
        window.location.href.length > 0 ? window.location.href.split("#") : [];

      sURLVariables =
        split_str != undefined &&
        split_str.length > 1 &&
        split_str[1].length > 0
          ? split_str[1].split("&")
          : [];
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1]);
        }
      }
      return;
    };

    // Le token d'acces est stocke dans cette variable

    const accessToken = getUrlParameter("access_token");

    /* BLOC CONNEXION */

    let client_id = "26497d6a4fa64c8e94d149daa47ca735";

    /* URL du site pour la redirection apres connexion (il faut l'encoder) : https://www.url-encode-decode.com/ */
    var redirect_uri = "http%3A%2F%2Flocalhost%3A4200%2F";
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;

    // On verifie si le  token n'est pas  vide
    if (accessToken == null || accessToken == "" || accessToken == undefined) {
      window.location.replace(redirect);
    }
    this.token = (accessToken || "").toString();

    this.isConnected = true;
    this.changementMenu.emit("connected");

    console.log("Le token d'acces est : " + this.token);
  }

  // Pour se déconnecter de l'API spotify
  logoutSpotify(): void {
    const url = "https://accounts.spotify.com/en/logout";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );
  }
}

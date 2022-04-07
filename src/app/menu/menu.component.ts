import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  // Déclaration des variables pour activer les differents composants
  activeAccueil: boolean;
  activePlaylist: boolean;
  activeRecherche: boolean;
  activeStatistiques: boolean;
  activeParoles: boolean;
  activeConcerts: boolean;
  activeContact: boolean;
  activeAPropos: boolean;
  isConnected: boolean;

  @Output() changementAccueil = new EventEmitter();

  constructor() {}

  //  Initialisation des variables
  ngOnInit(): void {
    this.activeAccueil = true;
    this.isConnected = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Permet de naviguer dans le mnu
  changementMenu(dir: string): void {
    switch (dir) {
      case "accueil":
        this.activerAccueil_Event();
        break;
      case "statistiques":
        this.activerStatistiques_Event();
        break;
      case "playlist":
        this.activerplaylist_Event();
        break;
      case "recherche":
        this.activerRecherche_Event();
        break;
      case "paroles":
          this.activerParoles_Event();
        break;
      case "concerts":
        this.activerConcerts_Event();
        break;
      case "contact":
        this.activerContact_Event();
        break;
      case "connected":
        this.activerConnected_Event();
        break;
      default:
        break;
    }
  }

  // Affichage de la section Accueil
  activerAccueil(): void {
    this.activeAccueil = true;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("accueil");
  }

  // Activation de la section Accueil
  activerAccueil_Event(): void {
    this.activeAccueil = true;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Playlist
  activerPlaylist(): void {
    this.activeAccueil = false;
    this.activePlaylist = true;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("playlist");
  }

  // Activation de la section Playlist
  activerplaylist_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = true;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Recherche
  activerRecherche(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = true;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("recherche");
  }

  // Activation de la section Recherche
  activerRecherche_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = true;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Paroles
  activerParoles(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = true;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("paroles");

  }

  // Activation de la section Paroles
  activerParoles_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = true;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Statistiques
  activerStatistiques(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = true;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("infos");
  }

  // Activation de la section Statistiques
  activerStatistiques_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = true;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Concerts
  activerConcerts(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = true;
    this.activeContact = false;
    this.activeAPropos = false;
    this.changementAccueil.emit("concerts");
  }

  // Activation de la section Concerts
  activerConcerts_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = true;
    this.activeContact = false;
    this.activeAPropos = false;
  }

  // Affichage de la section Contact
  activerContact(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = true;
    this.activeAPropos = false;
    this.changementAccueil.emit("contact");
  }

  // Activation de la section Contact
  activerContact_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = true;
    this.activeAPropos = false;
  }

  // Affichage de la section A propos
  activerAPropos(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = true;
    this.changementAccueil.emit("apropos");
  }

  // Activation de la section A propos
  activerAPropos_Event(): void {
    this.activeAccueil = false;
    this.activePlaylist = false;
    this.activeRecherche = false;
    this.activeStatistiques = false;
    this.activeParoles = false;
    this.activeConcerts = false;
    this.activeContact = false;
    this.activeAPropos = true;
  }

  // Activation de isConnected
  activerConnected_Event(): void {
    this.isConnected = true;
  }
}

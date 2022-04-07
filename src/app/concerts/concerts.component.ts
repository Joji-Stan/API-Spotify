import * as $ from "jquery";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-concerts",
  templateUrl: "./concerts.component.html",
  styleUrls: ["./concerts.component.css"],
})
export class ConcertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.chercherConcert();
  }

  // Cherche les concerts prévus et les ajoute au tableau d'affichage (ici pour les UK car il n'y en a pas pour les FR avec ticketmaster...)
  chercherConcert() {
    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=UK&size=50&apikey=F7YGoEbbnHg7DSEB2GB5F6rwsdeEVcOY", // API très limité alors affichage pour le royaume uni et peu dans les autres pays (aucun en france mais pas mal en belgique tout de même)
      async: true,
      dataType: "json",
      success: function (data) {
        let list: number[] = [0];

        // Récupération des données des évènements. Pour chaque donnée :
        data._embedded.events.forEach(function (resultat: any, i: any) {
          var tableauConcert = $("#tableauConcert");
          // On récupère son nom, sa date et l'url permettant la réservation des tickets.
          var concerts = $(`
                    <tr>
                      <td class="text-center">` +
              (i + 1) +
              `</td>
                      <td>` +
              resultat.name +
              `</td>
                      <td> ` +
              resultat.dates.start.localDate +
              `</td>
                      <td class="td-actions text-right">
                          <a type="button" rel="tooltip" class="btn btn-warning btn-sm btn-icon" href="` +
              resultat.url +
              `" target="_blank">
                              <i class="tim-icons icon-tap-02"></i>
                          </a>
                      </td>
                    </tr>`);

          // On ajoute les concerts dans le tableau
          tableauConcert.append(concerts);
        });
      },
      error: function (xhr, status, err) {},
    });
  }

}

import * as $ from "jquery";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   //  this.chercherConcert()
  }
/*
  // Cherche les concerts prévus et les ajoute au tableau d'affichage
  chercherConcert(){
    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=BE&size=50&apikey=20b30a6a63e5952119d359de487cd27612ba97d0",
      async:true,
      dataType: "json",
      success: function(data) {

                  // Récupération des données des évènements. Pour chaque donnée :
                  data._embedded.events.forEach(function (resultat, i) {
                    var tableauConcert = $('#tableauConcert');
                    // On récupère son nom, sa date et l'url permettant la réservation des tickets.
                    // Remarque : On fait en sorte que le lien permettant de réserver les tickets s'ouvre dans une autre fenêtre.
                    var c = $(`
                    <tr>
                      <td class="text-center">` + (i+1) + `</td>
                      <td>` + resultat.name + `</td>
                      <td> ` + resultat.dates.start.localDate + `</td>
                      <td class="td-actions text-right">
                          <a type="button" rel="tooltip" class="btn btn-warning btn-sm btn-icon" href="`+ resultat.url + `" target="_blank">
                              <i class="tim-icons icon-tap-02"></i>
                          </a>
                      </td>
                    </tr>`);

                    // On ajoute le concert au tableau.
                    tableauConcert.append(c);

                  });
              },
      error: function(xhr, status, err) {}
    });
  }
  */
}

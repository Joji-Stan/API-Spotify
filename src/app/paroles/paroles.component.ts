import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-paroles',
  templateUrl: './paroles.component.html',
  styleUrls: ['./paroles.component.css']
})
export class ParolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // Fonction qui permet d'afficher les paroles de la musique en question
   paroleSons(artiste: string, title: string):void {

    $.get(`https://api.lyrics.ovh/v1/${artiste}/${title}`,
    function(data){
      var elem = document.getElementById("output");
      if (typeof elem !== "undefined" && elem !== null) {
        elem.innerHTML = data.lyrics.replace(new RegExp("\n","g"),"<br>")
      }
      })

  }
}

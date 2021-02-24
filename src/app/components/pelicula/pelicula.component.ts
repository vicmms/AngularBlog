import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Pelicula } from 'src/app/models/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() marcarFavorita = new EventEmitter(); //evento que es invocado con '.emit'
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, pelicula) {
    this.marcarFavorita.emit({
      pelicula: pelicula
    });
  }

}

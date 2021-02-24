import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula'

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor() { 
    this.titulo = 'Componente peliculas';
    this.peliculas = [
      new Pelicula('Spiderman 4', 2015, 'https://pm1.narvii.com/6355/a518db3e9df4bdbb05614220ef6d4272a879e488_hq.jpg'),
      new Pelicula('Vengadores', 2020, 'https://r4.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc'),
      new Pelicula('Batman V Superman', 2019, 'https://images-na.ssl-images-amazon.com/images/I/512CL2VISIL._AC_.jpg')
    ]
    this.fecha = new Date(2021, 8, 12);
  }

  ngOnInit(): void {
    console.log(this.peliculas)
  }
  
  ngDoCheck(){
    console.log('DoCheck lanzado');
  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar');
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

  cambiarTitulo(){
    this.titulo = 'El titulo ah sido cambiado';
  }



}

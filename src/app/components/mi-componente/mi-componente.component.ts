import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo soy mi-componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2021;
        this.mostrarPeliculas = true;
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}
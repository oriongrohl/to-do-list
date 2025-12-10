import { Component } from '@angular/core';

export interface Tarea {
    nombre: string,
    descripcion: string,
    urgente: boolean,
    fecha: Date
}


@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    styleUrl: './list.css',
    standalone: false
})


export class ListaComponent {
    public nombre: string = "cosas que hacer";
    public errorNombreVacio: string = "";
    public lista: Tarea[] = [{nombre: "deberes angular", descripcion: "terminar los ejercicios",urgente: false, fecha: new Date(2025,12,3)}];
    visible = false;

    public cambiarNombreLista(nombre: string){
        this.nombre=nombre;
    }

    public addTarea(nombre: string, descripcion: string, urgente: boolean){ // primero vamos a hacer sin que se pueda modificar el orden de las tareas dentro e la lista
        if(nombre.trim() === ""){
            this.errorNombreVacio="El nombre de la tarea es un campo obligatorio"
        }else{
            this.lista.push({nombre: nombre, descripcion: descripcion, urgente, fecha: new Date(2025,12,3)});
            this.visible=false;
            this.errorNombreVacio="";
        }
    }

    public eliminarUltimaTarea(){
        this.lista.pop()
    }

    
    abrir() { this.visible = true; }
    cerrar() { this.visible = false; }

}
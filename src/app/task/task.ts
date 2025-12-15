import { Component, Input, OnInit } from '@angular/core';
import { ListComponent } from '../components/list/list';
import { Tarea } from '../models/tarea-model';


@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})

export class TaskComponent implements OnInit {
  @Input() tarea!: Tarea; // Recibimos la tarea desde el componente padre -> solo recibimos una tarea no la lista de tareas. Eso como es logico se queda en el componente lista.
  ngOnInit(): void {
    console.log();
  }
  
}

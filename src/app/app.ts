import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaModule } from './list/list.module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('to-do-list');
}

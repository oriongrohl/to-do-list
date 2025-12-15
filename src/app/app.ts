import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app-module';
// import { ListaModule_1 as ListaModule } from "./components/list/list.module";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('to-do-list');
}

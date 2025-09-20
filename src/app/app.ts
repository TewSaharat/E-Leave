import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePege } from "./home-pege/home-pege";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ESS');
}

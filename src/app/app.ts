import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Flexbox } from './flexbox/flexbox';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Flexbox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingexample');




}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { SiteHeaderComponent } from './site-header/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Catalog, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pluralsight-angular-project-robot-shop');
}

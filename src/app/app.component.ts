import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanConditionsComponent } from './components/ocean-conditions/ocean-conditions.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OceanConditionsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gs-ocean';
}

import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { OceanConditionsComponent } from './components/ocean-conditions/ocean-conditions.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'oceanproject', component:OceanConditionsComponent},
  {path: '**', component:HomeComponent}
];

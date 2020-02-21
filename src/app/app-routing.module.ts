import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeNinjaComponent } from './liste-ninja/liste-ninja.component';
import { ListeMissionsComponent } from './liste-missions/liste-missions.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ninjas', component: ListeNinjaComponent },
  { path: 'missions', component: ListeMissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

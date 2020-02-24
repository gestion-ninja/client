import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeNinjaComponent } from './liste-ninja/liste-ninja.component';
import { ListeMissionsComponent } from './liste-missions/liste-missions.component';
import { AjouterNinjaComponent } from './ajouter-ninja/ajouter-ninja.component';
import { AjouterMissionComponent } from './ajouter-mission/ajouter-mission.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ninjas', component: ListeNinjaComponent, children: [
    { path: 'ajouter', component: AjouterNinjaComponent}
  ]},
  { path: 'missions', component: ListeMissionsComponent, children: [
    { path: 'ajouter', component: AjouterMissionComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

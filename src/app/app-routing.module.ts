import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { NoAuthCanActivateService } from './services/can-activate/no-auth-can-activate.service';
import { BatimentComponent } from './gestion/batiment/batiment/batiment.component';
import { JoueurComponent } from './gestion/joueur/joueur/joueur.component';
import { PartieComponent } from './gestion/partie/partie/partie.component';
import { EditRessourceComponent } from './gestion/ressource/edit-ressource/edit-ressource.component';
import { RessourceComponent } from './gestion/ressource/ressource/ressource.component';

const routes: Routes = [
  {
    path: 'authentification',
    component: AuthentificationComponent,
  },
  { path: 'gestion/parties', component: PartieComponent },
  { path: 'gestion/joueurs', component: JoueurComponent },
  { path: 'gestion/ressources', component: RessourceComponent },
  { path: 'gestion/ressources/edit', component: EditRessourceComponent },
  { path: 'gestion/ressources/edit/:id', component: EditRessourceComponent },
  { path: 'gestion/batiments', component: BatimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

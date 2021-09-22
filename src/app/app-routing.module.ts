import { ChargerPartieComponent } from './gestion/charger-partie/charger-partie.component';
import { EditDefenseComponent } from './gestion/batiment/edit-defense/edit-defense.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { NoAuthCanActivateService } from './services/can-activate/no-auth-can-activate.service';
import { BatimentComponent } from './gestion/batiment/batiment/batiment.component';
import { JoueurComponent } from './gestion/joueur/joueur/joueur.component';
import { PartieComponent } from './gestion/partie/partie/partie.component';
import { EditRessourceComponent } from './gestion/ressource/edit-ressource/edit-ressource.component';
import { RessourceComponent } from './gestion/ressource/ressource/ressource.component';
import { HomeComponent } from './home/home.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { EditAttaqueComponent } from './gestion/batiment/edit-attaque/edit-attaque.component';
import { EditProductionComponent } from './gestion/batiment/edit-production/edit-production.component';
import { EditTransformationComponent } from './gestion/batiment/edit-transformation/edit-transformation.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'authentification',
    component: AuthentificationComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  { path: 'pagejeu', component: PageJeuComponent },
  { path: 'gestion/charge', component: ChargerPartieComponent },
  { path: 'gestion/parties', component: PartieComponent },
  { path: 'gestion/joueurs', component: JoueurComponent },
  { path: 'gestion/ressources', component: RessourceComponent },
  { path: 'gestion/ressources/edit', component: EditRessourceComponent },
  { path: 'gestion/ressources/edit/:id', component: EditRessourceComponent },
  { path: 'gestion/batiments', component: BatimentComponent },
  { path: 'gestion/batiments/attaque/edit', component: EditAttaqueComponent },
  {
    path: 'gestion/batiments/attaque/edit/:id',
    component: EditAttaqueComponent,
  },
  { path: 'gestion/batiments/defense/edit', component: EditDefenseComponent },
  {
    path: 'gestion/batiments/defense/edit/:id',
    component: EditDefenseComponent,
  },
  {
    path: 'gestion/batiments/production/edit',
    component: EditProductionComponent,
  },
  {
    path: 'gestion/batiments/production/edit/:id',
    component: EditProductionComponent,
  },
  {
    path: 'gestion/batiments/transformation/edit',
    component: EditTransformationComponent,
  },
  {
    path: 'gestion/batiments/transformation/edit/:id',
    component: EditTransformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

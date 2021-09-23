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
import { RulesComponent } from './game/rules/rules.component';
import { AdminCanActivateService } from './services/can-activate/admin-can-activate.service';
import { AllCanActivateService } from './services/can-activate/all-can-activate.service';

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
  {
    path: 'pagejeu/:id',
    component: PageJeuComponent,
    canActivate: [AllCanActivateService],
  },
  { path: 'rules', component: RulesComponent },
  {
    path: 'gestion/charge',
    component: ChargerPartieComponent,
    canActivate: [AllCanActivateService],
  },
  {
    path: 'gestion/parties',
    component: PartieComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/joueurs',
    component: JoueurComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/ressources',
    component: RessourceComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/ressources/edit',
    component: EditRessourceComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/ressources/edit/:id',
    component: EditRessourceComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments',
    component: BatimentComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/attaque/edit',
    component: EditAttaqueComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/attaque/edit/:id',
    component: EditAttaqueComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/defense/edit',
    component: EditDefenseComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/defense/edit/:id',
    component: EditDefenseComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/production/edit',
    component: EditProductionComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/production/edit/:id',
    component: EditProductionComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/transformation/edit',
    component: EditTransformationComponent,
    canActivate: [AdminCanActivateService],
  },
  {
    path: 'gestion/batiments/transformation/edit/:id',
    component: EditTransformationComponent,
    canActivate: [AdminCanActivateService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

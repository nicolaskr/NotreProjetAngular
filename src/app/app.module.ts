import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { MenuConstructionComponent } from './game/menu-construction/menu-construction.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAmeliorationComponent } from './game/menu-amelioration/menu-amelioration.component';
import { MenuTransformationComponent } from './game/menu-transformation/menu-transformation.component';
import { MenuAttaqueComponent } from './game/menu-attaque/menu-attaque.component';
import { EditRessourceComponent } from './gestion/ressource/edit-ressource/edit-ressource.component';
import { BatimentComponent } from './gestion/batiment/batiment/batiment.component';
import { JoueurComponent } from './gestion/joueur/joueur/joueur.component';
import { PartieComponent } from './gestion/partie/partie/partie.component';
import { RessourceComponent } from './gestion/ressource/ressource/ressource.component';

import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { EditAttaqueComponent } from './gestion/batiment/edit-attaque/edit-attaque.component';
import { EditDefenseComponent } from './gestion/batiment/edit-defense/edit-defense.component';
import { EditProductionComponent } from './gestion/batiment/edit-production/edit-production.component';
import { EditTransformationComponent } from './gestion/batiment/edit-transformation/edit-transformation.component';
import { CoutBatimentComponent } from './gestion/batiment/cout-batiment/cout-batiment.component';
import { ChargerPartieComponent } from './gestion/charger-partie/charger-partie.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent,
    MenuConstructionComponent,
    MenuAmeliorationComponent,
    MenuTransformationComponent,
    MenuAttaqueComponent,
    EditRessourceComponent,
    BatimentComponent,
    JoueurComponent,
    PartieComponent,
    RessourceComponent,
    EditRessourceComponent,
    AuthentificationComponent,
    HomeComponent,
    InscriptionComponent,
    EditAttaqueComponent,
    EditDefenseComponent,
    EditProductionComponent,
    EditTransformationComponent,
    CoutBatimentComponent,
    ChargerPartieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

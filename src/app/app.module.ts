import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { MenuConstructionComponent } from './game/menu-construction/menu-construction.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAmeliorationComponent } from './game/menu-amelioration/menu-amelioration.component';
import { MenuTransformationComponent } from './game/menu-transformation/menu-transformation.component';
import { MenuAttaqueComponent } from './game/menu-attaque/menu-attaque.component';
import { TransformerRessourceComponent } from './game/transformer-ressource/transformer-ressource.component';
import { EditRessourceComponent } from './gestion/ressource/edit-ressource/edit-ressource.component';
import { BatimentComponent } from './gestion/batiment/batiment/batiment.component';
import { JoueurComponent } from './gestion/joueur/joueur/joueur.component';
import { PartieComponent } from './gestion/partie/partie/partie.component';
import { RessourceComponent } from './gestion/ressource/ressource/ressource.component';

import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent,
    MenuConstructionComponent,
    MenuAmeliorationComponent,
    MenuTransformationComponent,
    MenuAttaqueComponent,
    TransformerRessourceComponent,
    EditRessourceComponent,
    BatimentComponent,
    JoueurComponent,
    PartieComponent,
    RessourceComponent,
    EditRessourceComponent,
    AuthentificationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

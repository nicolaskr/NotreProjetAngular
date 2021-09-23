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
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ListboxModule } from 'primeng/listbox';

import {AccordionModule} from 'primeng/accordion';

import { EditAttaqueComponent } from './gestion/batiment/edit-attaque/edit-attaque.component';
import { EditDefenseComponent } from './gestion/batiment/edit-defense/edit-defense.component';
import { EditProductionComponent } from './gestion/batiment/edit-production/edit-production.component';
import { EditTransformationComponent } from './gestion/batiment/edit-transformation/edit-transformation.component';
import { CoutBatimentComponent } from './gestion/batiment/cout-batiment/cout-batiment.component';
import { ListCoutBatimentComponent } from './gestion/batiment/list-cout-batiment/list-cout-batiment.component';
import { TransformationRessourceComponent } from './gestion/batiment/transformation-ressource/transformation-ressource.component';
import { ListTransformationRessourceComponent } from './gestion/batiment/list-transformation-ressource/list-transformation-ressource.component';
import { ChargerPartieComponent } from './gestion/charger-partie/charger-partie.component';
import { SelectJoueurComponent } from './gestion/joueur/select-joueur/select-joueur.component';
import { RulesComponent } from './game/rules/rules.component';

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
    ListCoutBatimentComponent,
    TransformationRessourceComponent,
    ListTransformationRessourceComponent,
    ChargerPartieComponent,
    SelectJoueurComponent,
    RulesComponent,
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
    TableModule,
    // CalendarModule,
    // SliderModule,
    DialogModule,
    // MultiSelectModule,
    // ContextMenuModule,
    // DropdownModule,
    ToastModule,
    InputTextModule,
    // ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    // RadioButtonModule,
    // InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    AvatarModule,
    AvatarGroupModule,
    ListboxModule,
    AccordionModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { MenuConstructionComponent } from './game/menu-construction/menu-construction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAmeliorationComponent } from './game/menu-amelioration/menu-amelioration.component';
import { MenuTransformationComponent } from './game/menu-transformation/menu-transformation.component';
import { MenuAttaqueComponent } from './game/menu-attaque/menu-attaque.component';
import { TransformerRessourceComponent } from './game/transformer-ressource/transformer-ressource.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent,
    MenuConstructionComponent,
    MenuAmeliorationComponent,
    MenuTransformationComponent,
    MenuAttaqueComponent,
    TransformerRessourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

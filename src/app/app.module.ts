import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { PageJeuComponent } from './page-jeu/page-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent
  ],
=======
import { AuthentificationComponent } from './authentification/authentification/authentification.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AuthentificationComponent],
>>>>>>> Stashed changes
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< Updated upstream
    RouterModule.forRoot(routes)
=======
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

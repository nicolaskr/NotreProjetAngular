import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { NoAuthCanActivateService } from './services/can-activate/no-auth-can-activate.service';

const routes: Routes = [
  {
    path: 'authentification',
    component: AuthentificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PortefeuilleComponent } from './pages/portefeuille/portefeuille.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },
  { path: 'portfolio/:id', component: PortefeuilleComponent },
  { path: 'projets', component: ProjectPageComponent }
  // autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

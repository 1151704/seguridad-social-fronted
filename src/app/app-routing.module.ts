import { MainPlanRegistrarComponent } from './components/main-plan-registrar/main-plan-registrar.component';
import { MainPlanEditarComponent } from './components/main-plan-editar/main-plan-editar.component';
import { MainPlanesComponent } from './components/main-planes/main-planes.component';
import { MainEmpresaComponent } from './components/main-empresa/main-empresa.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainComponent } from './components/main/main.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
    children: [
      { path: "", component: InicioSignInComponent },
      { path: "signin", component: InicioSignInComponent }
    ]
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "", component: MainInicioComponent },
      { path: 'empresa', component: MainEmpresaComponent },
      { path: 'planes', component: MainPlanesComponent },
      { path: 'plan-editar', component: MainPlanEditarComponent },
      { path: 'plan-registrar', component: MainPlanRegistrarComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

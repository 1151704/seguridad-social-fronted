import { InicioSolicitudComponent } from './components/inicio-solicitud/inicio-solicitud.component';
import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainUsuarioEditarComponent } from './components/main-usuario-editar/main-usuario-editar.component';
import { MainUsuarioRegistrarComponent } from './components/main-usuario-registrar/main-usuario-registrar.component';
import { MainUsuarioComponent } from './components/main-usuario/main-usuario.component';
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
      { path: "", component: InicioPrincipalComponent },
      { path: "signin", component: InicioSignInComponent },
      { path: "afiliacion", component: InicioSolicitudComponent }
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
      { path: 'perfil', component: MainUsuarioComponent},
      { path: 'usuarios', component: MainUsuariosComponent},
      { path: 'usuario-registrar', component: MainUsuarioRegistrarComponent},
      { path: 'usuario-editar', component: MainUsuarioEditarComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

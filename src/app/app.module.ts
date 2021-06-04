import { ApiService } from './core/api.service';
import { NotificacionService } from './core/notificacion.service';
import { TokenInterceptor } from './core/interceptor';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioMainComponent } from './components/inicio-main/inicio-main.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { MainComponent } from './components/main/main.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainEmpresaComponent } from './components/main-empresa/main-empresa.component';
import { MainPlanesComponent } from './components/main-planes/main-planes.component';
import { MainPlanEditarComponent } from './components/main-plan-editar/main-plan-editar.component';
import { MainPlanRegistrarComponent } from './components/main-plan-registrar/main-plan-registrar.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainUsuarioComponent } from './components/main-usuario/main-usuario.component';
import { MainUsuarioEditarComponent } from './components/main-usuario-editar/main-usuario-editar.component';
import { MainUsuarioRegistrarComponent } from './components/main-usuario-registrar/main-usuario-registrar.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { InicioPrincipalComponent } from './components/inicio-principal/inicio-principal.component';
import { InicioAfiliacionComponent } from './components/inicio-afiliacion/inicio-afiliacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioMainComponent,
    InicioSignInComponent,
    MainComponent,
    MainInicioComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainMenuComponent,
    MainEmpresaComponent,
    MainPlanesComponent,
    MainPlanEditarComponent,
    MainPlanRegistrarComponent,
    MainUsuariosComponent,
    MainUsuarioComponent,
    MainUsuarioEditarComponent,
    MainUsuarioRegistrarComponent,
    NotificationListComponent,
    InicioPrincipalComponent,
    InicioAfiliacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDualListBoxModule,
  ],
  providers: [NotificacionService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

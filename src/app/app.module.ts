import { TokenInterceptor } from './core/interceptor';
import { ApiService } from './services/api.service';
import { NotificacionService } from './services/notificacion.service';
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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioMainComponent,
    InicioSignInComponent,
    MainComponent,
    MainInicioComponent,
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

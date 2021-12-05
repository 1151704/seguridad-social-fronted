import { API_REST, NAME_APP } from './../../url.constants';
import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { AuthService } from './../../services/auth/auth.service';
import { AuthLoginInfo } from './../../auth/login-info';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-inicio-sign-in',
  templateUrl: './inicio-sign-in.component.html',
  styleUrls: ['./inicio-sign-in.component.css']
})
export class InicioSignInComponent implements OnInit {
  urlBase: string = API_REST;
  checkoutForm: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private loginInfo: AuthLoginInfo;
  @Input() empresa: Empresa = new Empresa();

  constructor(

    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title

  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Ingresar`);
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: '',
    });
    this.isLoggedIn = false;
    this.authService.isLoggedIn().subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.router.navigate(['/main']);
      }
    })

  }

  onSubmit(customerData: any) {
    this.errorMessage = '';
    this.isLoginFailed = false;
    this.loginInfo = new AuthLoginInfo(customerData.username, customerData.password);
    Swal.fire({
      title: 'Procesando datos',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
    const attemptAuth = this.authService.attemptAuth(this.loginInfo);

    if (attemptAuth) {
      attemptAuth.subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data.usuario);

          this.isLoginFailed = false;
          this.isLoggedIn = true;

          this.authService.isLoggedIn();

          this.router.navigate(['/main']);
          Swal.close();
        },
        error => {
          this.errorMessage = 'Servidor fuera de línea';
          if (error.error.message) {
            this.errorMessage = error.error.message;
            if (error.error.error) {
              this.errorMessage+=': '+error.error.error;
            }
          }
          this.isLoginFailed = true;
          Swal.close();
        }
      );
    }
  }

}

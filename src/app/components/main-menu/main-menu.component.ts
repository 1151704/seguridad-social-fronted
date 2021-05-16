import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  host: {
    class: 'sidebar navbar-nav'
  }
})
export class MainMenuComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}

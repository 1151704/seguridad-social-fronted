import { TokenStorageService } from './../../services/auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  info: any = {};

  constructor(
    private token: TokenStorageService,
    private router: Router) {
  }

  ngOnInit() {
    this.token.validate();
    this.info = this.token.getInfo();
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['inicio/signin']);
  }

  sidebarToggle() {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  }
}

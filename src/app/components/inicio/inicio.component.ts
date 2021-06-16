import { API_REST, NAME_APP } from './../../url.constants';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empresa } from 'src/app/models/empresa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  empresa: Empresa = null
  urlBase: string = API_REST;

  constructor(private router: Router) { }

  ngOnInit(): void {}

}

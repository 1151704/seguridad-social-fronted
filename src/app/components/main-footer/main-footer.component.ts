import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css'],
  host: {
    class: "sticky-footer"
  }
})
export class MainFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

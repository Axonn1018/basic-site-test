import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pageStatus = {
    home: false,
    about: false,
    contact: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

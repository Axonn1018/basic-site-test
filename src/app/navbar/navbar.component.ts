import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

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

  goHome() {
    console.log("Home button has been pressed.");
  }

  goAbout() {
    console.log("About button has been pressed.");
  }

  goContact(){
    console.log("Contact button has been pressed.");
  }

}

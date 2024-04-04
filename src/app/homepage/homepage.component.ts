import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showDetail = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetailButton() {
    this.showDetail = !this.showDetail;
    console.log("Toggling detail button.");
  }

  consoleTest() {
    console.log("Testing click action on a tag item.");
  }

}

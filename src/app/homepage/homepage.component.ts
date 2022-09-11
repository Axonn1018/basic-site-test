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

  logTest() {
    // console.log("Button Test");
    // this.showDetail = !this.showDetail;
    // console.log("Current showDetail status: ", this.showDetail);
    var x = document.getElementById("showDetail");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  showDetailButton() {
    console.log("Show Button Detail Is Working!")
    this.showDetail = !this.showDetail;
  }

}

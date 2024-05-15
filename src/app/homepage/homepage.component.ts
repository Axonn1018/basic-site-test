import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  showDetail = false;

  newMsg = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

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

  sendMsg(){
    console.log("Logging name: ", this.newMsg.value.name);
    console.log("Logging email: ", this.newMsg.value.email);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'home.component.html',
  styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit {

  myEvent(event){
    console.log(event);
  }

  //////////////////


  isCollapsed:boolean = true;

  toggleColapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  ///////////////////

  text: string = "hello";

////////////////////


  b: boolean = true;

  toggle(){
    this.b = !this.b;
  }


  
  constructor() { }

  ngOnInit() {
  }

}

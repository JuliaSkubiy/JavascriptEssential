import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mynewcomponent',
  templateUrl: './mynewcomponent.component.html',
  styleUrls: ['./mynewcomponent.component.css']
})
export class MynewcomponentComponent implements OnInit {

  items = ["Hello World", "Привет Мир", "Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"];
  
  constructor() { }

  ngOnInit() {
  }

}

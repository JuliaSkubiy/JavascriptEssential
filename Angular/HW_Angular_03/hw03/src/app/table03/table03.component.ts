import { Component, OnInit } from '@angular/core';
import { ServisProdService } from './servis-prod.service';

@Component({
  selector: 'app-table03',
  templateUrl: './table03.component.html',
  styleUrls: ['./table03.component.css'],
  providers: [ServisProdService]
})
export class Table03Component implements OnInit {

//   Products = [{ id: 1, name : 'product 1', price : 100 },
//   { id: 2, name : 'product 2', price : 200 },
//   { id: 3, name : 'product 3', price : 300 },
//   { id: 4, name : 'product 4', price : 400 },
//   { id: 5, name : 'product 5', price : 500 },
//   { id: 6, name : 'product 6', price : 600 },
//   { id: 7, name : 'product 7', price : 700 },
//   { id: 8, name : 'product 8', price : 800 },
//   { id: 9, name : 'product 9', price : 900 },
//   { id: 10, name : 'product 10', price : 1000 }
// ];


text = [
  {id: 11, name: 'product 11', price: 110}
];


  constructor(private svc: ServisProdService) { }

  ngOnInit() {
    // for(let i =0; this.Products.length > i; i++){
      // if(this.Products[i].price > 500){
        // console.log("Red");
      // }
    
    // }
  }

}

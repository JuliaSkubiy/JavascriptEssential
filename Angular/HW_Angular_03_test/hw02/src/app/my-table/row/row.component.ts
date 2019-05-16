import { Component, OnInit } from '@angular/core';

// import { MyTableComponent } from '../my-table.component';



@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  visible: boolean = true;

  del(){
    this.visible = false;
    
  //  console.log(MyTableComponent.Products[i].id);

  }



  constructor() { }

  ngOnInit() {
  }

}

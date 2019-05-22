import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('todo') != undefined){
      this.todos = JSON.parse(localStorage.getItem('todo'));
    }
  }
  

  todos = [
  {
    label: "Купить хліб",
    done: true,
    priority: 1,
  },
  {
    label: "Вигулять пса",
    done: true,
    priority: 1,
  },
  {
    label: "Поприбирати",
    done: false,
    priority: 1,
  }
]

off: boolean;

addTask (newTodoLabel){
  const newTodo = {
    label: newTodoLabel,
    done: false,
    priority: 1,
  }

  // if(newTodo.value == null){
    // this.off = true;
  // }
  // else{
  this.todos.push(newTodo);

  localStorage.setItem("todo", JSON.stringify(this.todos));
  // }

}


Delet (todo) {
  this.todos = this.todos.filter( t => t.label !== todo.label );
}

///////////////////////////////////////////////////

  tF: boolean;

  colorGreen(){
    for(let i = 0; i< this.todos.length; i++){
      this.tF = this.todos[i].done;
    }
   return this.tF;
  };


  flag(){
    this.tF = !this.tF;
  } 



}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

addTask (newTodoLabel){
  const newTodo = {
    label: newTodoLabel,
    done: false,
    priority: 1,
  }

  this.todos.push(newTodo);
}

Delet (todo) {
  this.todos = this.todos.filter( t => t.label !== todo.label )
}

}
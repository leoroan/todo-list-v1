import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];

  inputTodo:string = "";
  placeholder_text:string = "Ingrese ToDo";
  
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "Firts to do",
        completed: false
      },
      {
        content: "second to do",
        completed: true
      }
    ]
  }

  toggleDone(id: number){
    this.todos.map((v,i) => {
      if ( i == id)  v.completed = !v.completed;
      return v;
    } )
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v,i) => i !== id);

  }

  validarInput(){
    return this.inputTodo !== "";
  }

  addTodo(){
    if (this.validarInput()){
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });            
    }
    this.inputTodo="";
  }

}

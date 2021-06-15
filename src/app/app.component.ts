import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  todos: Observable<Todo[]>

  constructor(private store: Store<{todos: Todo[]}>){
    store.pipe(select('todos')).subscribe(todo => {
      console.log("todos", todo);      
    })
  }

  ngOnInit(){
  
  }

 }

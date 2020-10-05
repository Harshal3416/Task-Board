import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  newTaskForm: FormGroup;

  constructor(public dialog: MatDialog) {}

  // newTask = { name: '', desc: '', date: new Date() };

  todo = [];
  doing = [];
  done = [];
  rejected = [];

  ngOnInit() {

    this.newTaskForm = new FormGroup({
      'name' : new FormControl(null),
      'desc' : new FormControl(null),
      'date' : new FormControl(new Date())
    })

    let localtodo = localStorage.getItem('todo');
    if (localtodo !== null) {
      this.todo = JSON.parse(localtodo);
    }

    let localdoing = localStorage.getItem('doing');
    if (localdoing !== null) {
      this.doing = JSON.parse(localdoing);
    }

    let localdone = localStorage.getItem('done');
    if (localdone !== null) {
      this.done = JSON.parse(localdone);
    }

    let localrejected = localStorage.getItem('rejected');
    if (localrejected !== null) {
      this.rejected = JSON.parse(localrejected);
    }
  }

  addTask() {   
    this.todo.push(this.newTaskForm.value);
    
    this.newTaskForm.reset()
    localStorage.setItem('todo', JSON.stringify(this.todo));
    this.newTaskForm.value.date = new Date();
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('doing', JSON.stringify(this.doing));
    localStorage.setItem('done', JSON.stringify(this.done));
    localStorage.setItem('rejected', JSON.stringify(this.rejected));
  }

  deletetodo(date) {
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].date === date) {
        this.todo.pop();
      }
    }
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  deletedoing(date) {
    for (let i = 0; i < this.doing.length; i++) {
      if (this.doing[i].date === date) {
        this.doing.pop();
      }
    }
    localStorage.setItem('doing', JSON.stringify(this.doing));
  }
  deletedone(date) {
    for (let i = 0; i < this.done.length; i++) {
      if (this.done[i].date === date) {
        this.done.pop();
      }
    }
    localStorage.setItem('done', JSON.stringify(this.done));
  }
  deleterejected(date) {
    for (let i = 0; i < this.rejected.length; i++) {
      if (this.rejected[i].date === date) {
        this.rejected.pop();
      }
    }
    localStorage.setItem('rejected', JSON.stringify(this.rejected));
  }
}

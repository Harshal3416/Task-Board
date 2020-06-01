import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  newTask = { name: '', desc: '', date: new Date() };

  todo = [];
  doing = [];
  done = [];
  rejected = [];

  ngOnInit() {
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

  addtask() {
    this.newTask.date = new Date();
    this.todo.push(this.newTask);
    this.newTask = { name: null, desc: null, date: null };
    localStorage.setItem('todo', JSON.stringify(this.todo));
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
}

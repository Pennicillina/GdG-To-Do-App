import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do App';
  model = new Model();
  checkBox = false;

  getName() {
    return this.model.user;
  }

  getToDoItems(completed) {
    if (completed) {
      return this.model.items;
    } else {
      return this.model.items.filter(item => !item.done);
    }
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.model.items.push(new ToDoItem(newItem, false));
    }
  }

  removeItem(dataItem) {
    if (dataItem != null) {
      this.model.items = this.model.items.filter(item => item !== dataItem);
    }
  }

  saveItems() {
    localStorage.setItem('ToDoItems', JSON.stringify(this.model.items));
  }

  loadItems() {
    this.model.items = JSON.parse(localStorage.getItem('ToDoItems'));
  }
}

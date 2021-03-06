import { Injectable } from '@angular/core';

//firebase
import { AngularFireDatabase,AngularFireList  } from "angularfire2/database";
import { Title } from '@angular/platform-browser';

@Injectable()
export class TodoService {

  todoList:AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList()
  {
    this.todoList= this.firebasedb.list('titles');
    return this.todoList;
  }

  addTodo(title: string)
  {
    this.todoList.push({
      title: title,
      isChecked: false
    });
  }

  updateTodo($key: string, flag:boolean)
  {
    this.todoList.update($key, {isChecked:flag});
  }

  removeTodo($key: string)
  {
    this.todoList.remove($key);
  }
}

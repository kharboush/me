/* eslint-disable */

import { addTodoOnClick, deleteTodoOnClick, toggleTodoOnClick } from './events.js';
import { todosRefresh } from './utils.js';
import { addTodo, toggleTodo, deleteTodo } from './onclick.js';

(() => {
  todosRefresh();

  addTodoOnClick(addTodo);

  deleteTodoOnClick(deleteTodo);

  toggleTodoOnClick(toggleTodo);
})()
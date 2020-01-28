/* eslint-disable */

import { addTodoOnClick, deleteTodoOnClick, toggleTodoOnClick } from './events.js';
import { emptyState } from './utils.js';
import { addTodo, toggleTodo, deleteTodo } from './onclick.js';

$(document).ready(() => {
  emptyState();

  addTodoOnClick(addTodo);

  deleteTodoOnClick(deleteTodo);

  toggleTodoOnClick(toggleTodo);
});

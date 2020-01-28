/* eslint-disable */

import { addTodoClick, deleteTodoClick, toggleTodoClick } from "./events.js";
import { emptyState, addToArray, removeFromArray, addTodo, addTodoFn, toggleTodo, deleteTodo, todosReorder, todosRefresh, addNewTodoText } from "./utils.js"

$(document).ready(() => {

  emptyState()
  
  addTodoClick (addTodo);

  deleteTodoClick (deleteTodo)

  toggleTodoClick (toggleTodo)

});

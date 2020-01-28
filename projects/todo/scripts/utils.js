/* eslint-disable */

import { todosArray } from "./database.js"

const emptyState = () => {
  if (todosArray.length === 0) {
    $('#todo-list').append(`
      <div class="todo-element">
        <p class="empty-state">¡All Done!</p>
      </div>
    `)
  }
}

const dispMsg = (text) => {
  $('#heading').text("¡"+text+"!")
  setTimeout(() => {
    $('#heading').text("¡Todos!")
  }, 1000);
}

const addToArray = (array, element) => {
  array.push(element)
}

const removeFromArray = (array, id) => {
  array.splice(id, 1)
}

const addNewTodoText = (text, element) => {
  if (!(text) || !(text).replace(/\s/g, '').length) {
    dispMsg('Please add text')
  } else if (text.length > 40) {
    dispMsg('Todo is too long')
  } else {
    addToArray(todosArray, element)
    todosRefresh(todosArray, '#todo-list')
    // if ($newTodoText.length > 0) {
    //   addTodoFn($newTodoText)
    // }
    $('#addtodo-input-text').val(''); // Clear text field
    $('#addtodo-input-date').val(''); // Clear data field
  }
}

const appendTodoHtml = (todo, container) => {
  $(container).prepend(`
  <div id="todo-element-${todo.id}" class="todo-element">
  <label class="btn" for="check-${todo.id}">
  <input class="todocheck" data-check-id="${todo.id}" id="check-${todo.id}" type="checkbox" ${todo.isDone ? 'checked' : ''}>
  <p class="todotext">${todo.name}</p><div class="date">${moment(todo.due).format('ddd, MMM Do')}</div>
  <button class="delbutton" data-id="${todo.id}">Remove</button>
  </label>
  </div>
  <hr>
  `);
};

const todosReorder = () => {
  todosArray.forEach((todo, index) => {
    todo.id = index;
  });
}

const todosRefresh = (array, container) => {
  todosReorder()
  const $container = $(container);
  $container.empty();
  array.forEach(todo => {
    appendTodoHtml(todo, $container)
  });
};

export { emptyState, addToArray, removeFromArray, appendTodoHtml, todosReorder, todosRefresh, addNewTodoText, dispMsg }
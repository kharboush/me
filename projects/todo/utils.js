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

const addToArray = (array, element) => {
  array.push(element)
}

const removeFromArray = (array, id) => {
  array.splice(id, 1)
}

const addTodo = () => {
  const $newTodoText = $('#addtodo-input-text').val();
  let $newTodoDate;

  if ($(`#addtodo-input-date`).val()) {
    $newTodoDate = $('#addtodo-input-date').val()
  } else {
    $newTodoDate = new Date();
  }

  const newTodo = {id: todosArray.length, name: $newTodoText, due: $newTodoDate, isDone: false}

  addNewTodoText($newTodoText, newTodo)
}

const addTodoFn = (todo, container) => {
  $(container).prepend(`
    <div id="todo-element-${todo.id}" class="todo-element">
      <label class="btn" for="check-${todo.id}">
        <input class="todocheck" data-check-id="${todo.id}" id="check-${todo.id}" type="checkbox" ${todo.isDone ? 'checked' : ''}><p class="todotext">${todo.name}</p>
        <div class="date">${moment(todo.due).format('ddd, MMM Do')}</div>
        <button class="delbutton" data-id="${todo.id}">Remove</button>
      </label>
    </div>
    <hr>
  `);
};

const toggleTodo = () => {
  let todoid = $(event.target).attr('data-check-id');
  if($(event.target).is(":checked")){
    todosArray[todoid].isDone = true;
    if(Math.floor(Math.random() * 3) === 0) {
      dispMsg('Ch-ch-ch-check');
    } else if (Math.floor(Math.random() * 3) === 1) {
      dispMsg('Niiiice')
    } else {
      dispMsg('Touchdown')
    }
  } else if($(event.target).is(":not(:checked)")){
    todosArray[todoid].isDone = false;
  }

}

const deleteTodo = () => {
  let todoid = +$(event.target).attr('data-id');
  removeFromArray(todosArray, todoid)
  todosRefresh(todosArray, '#todo-list')
  // const target = $(ev.target)
  // $(target).parent().remove();
  emptyState()
  dispMsg('Todo Deleted');
}

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
    addTodoFn(todo, $container)
  });
};

export { emptyState, addToArray, removeFromArray, addTodo, addTodoFn, toggleTodo, deleteTodo, todosReorder, todosRefresh, addNewTodoText }
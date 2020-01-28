/* eslint-disable */
$(document).ready(() => {
  console.log('Ready');

  const todosArray = [];

  const emptyState = () => {
    if (todosArray.length === 0) {
      $('#todo-list').append(`
        <div class="todo-element">
          <p class="empty-state">¡All Done!</p>
        </div>
      `)
    }
  }
  emptyState()

  const addToArray = (array, element) => {
    array.push(element)
  }
  
  const removeFromArray = (array, id) => {
    array.splice(id, 1)
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

  
  $(`#addtodo-btn`).click(() => {
    const $newTodoText = $('#addtodo-input-text').val();
    let $newTodoDate;

    if ($(`#addtodo-input-date`).val()) {
      $newTodoDate = $('#addtodo-input-text').val()
    } else {
      $newTodoDate = new Date();
    }

    const newTodo = {id: todosArray.length, name: $newTodoText, due: $newTodoDate, isDone: false}
    if (!($newTodoText)) {
      alert('Hey! Your todo doesn\'t have text!')
    } else if ($newTodoText.length > 40) {
      alert('This todo is too long!')
    } else {
      addToArray(todosArray, newTodo)
      todosRefresh(todosArray, '#todo-list')
      // if ($newTodoText.length > 0) {
      //   addTodoFn($newTodoText)
      // }
      $('#addtodo-input-text').val(''); // Clear text field
      $('#addtodo-input-date').val(''); // Clear data field
    }

  });

  $('.todo-window').on('click', '[data-id]', () => {
    let todoid = $(event.target).attr('data-id');
    removeFromArray(todosArray, todoid)
    todosRefresh(todosArray, '#todo-list')
    // const target = $(ev.target)
    // $(target).parent().remove();
    emptyState()
    alert('Todo Deleted!');
  });

  $('.todo-window').on('click', '.todocheck', () => {
    // alert('Todo Toggled!');
    let todoid = $(event.target).attr('data-check-id');
    if($(event.target).is(":checked")){
      todosArray[todoid].isDone = true;
    } else if($(event.target).is(":not(:checked)")){
      todosArray[todoid].isDone = false;
    }
  });

});

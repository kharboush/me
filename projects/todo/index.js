/* eslint-disable */
$(document).ready(() => {
  console.log('Ready');

  const todosArray = [];

  const emptyState = () => {
    if (todosArray.length === 0) {
      $('#todo-list').append(`
      <div class="todo-element">
      <p class="empty-state">Add a todo to get started</p>
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
    const $newTodoDate = $(`#addtodo-input-date`).val();
    const newTodo = {id: todosArray.length, name: $newTodoText, due: $newTodoDate, isDone: false}
    if (!($newTodoText) || !($newTodoDate)) {
      alert('Please add text and date.')
    } else if ($newTodoText.length > 40) {
      alert('Please make your text shorter.')
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

  
});

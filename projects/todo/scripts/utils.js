/* eslint-disable */
const server = `http://localhost:3000/todos/`;

const checkEmptyState = () => {
  fetch(server)
  .then(response => response.json())
  .then(response => response.length)
  .then
    (
      (response => {
        if (response == 0) {
          $('#todo-list').append(`
            <div class="todo-element">
              <p class="empty-state">¡All Done!</p>
            </div>
          `)
        }
      })
    )
}

const dispMsg = (text) => {
  $('#heading').text("¡"+text+"!")
  setTimeout(() => {
    $('#heading').text("¡Todos!")
  }, 1000);
}

const addToServer = (element) => {
  fetch(`${server}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(element)
  })
    .then(res => res.json())
    .then(_=> {
      todosRefresh()
      $('#addtodo-input-text').val('');
      $('#addtodo-input-date').val('');
    })
}

const removeFromServer = (id) => {
  fetch(`${server}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(() => {
    todosRefresh();
    dispMsg('Todo Deleted');
  }).catch((err) => alert(err.message));
}

const toggleFromServer = (id, value) => {
  fetch(`${server}${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      isDone: value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const appendTodoHtml = (todo, container) => {
  $(container).prepend(`
  <div id="todo-element-${todo.id}" class="todo-element">
  <label class="btn" for="check-${todo.id}">
  <input class="todocheck" data-check-id="${todo.id}" id="check-${todo.id}" type="checkbox" ${todo.isDone ? 'checked' : ''}>
  <p class="todotext">${todo.name}</p><div class="date">${moment(todo.due).format('ddd, MMM Do')}</div>
  <button class="delbutton" type="button" data-id="${todo.id}">Remove</button>
  </label>
  </div>
  <hr>
  `);
};

const todosRefresh = () => {
  const $container = $('#todo-list');
  $container.empty();
  
  fetch(server)
  .then(response => response.json())
  .then(data => data.forEach(todo => {appendTodoHtml(todo, $container)}))

  checkEmptyState()
};

const addNewTodoText = (text, element) => {
  if (!(text) || !(text).replace(/\s/g, '').length) {
    dispMsg('Please add text')
  } else if (text.length > 40) {
    dispMsg('Todo is too long')
  } else {
    addToServer(element) // Clear data field
  }
}

export { removeFromServer, todosRefresh, addNewTodoText, dispMsg, toggleFromServer }
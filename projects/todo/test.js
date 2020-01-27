const todosArray = [
  { id: 44, name: 'asd' },
  { id: 1231, name: 'asd' },
];

const todosReorder = () => {
  todosArray.forEach((todo, index) => {
    todo.id = index;
  });
};
todosReorder();

console.log(todosArray);

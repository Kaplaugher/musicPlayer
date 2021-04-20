// select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// when i submit add a new element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  // 1. create new item
  const item = document.createElement('div');
  item.innerHTML = input.value;
  item.classList.add('list-item');
  console.log(item);

  // 2. add item to list
  list.appendChild(item);
  // 3. clear input
  input.value = '';
  // 4. set up event listeneer to delete item when clicked
  item.addEventListener('click', () => {
    list.removeChild(item);
  });
});

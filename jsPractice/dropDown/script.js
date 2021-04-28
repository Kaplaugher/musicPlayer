// grab needed elements

console.log('neener');
const cards = Array.from(document.getElementsByClassName('card'));

// add event listener to card button to add show class

cards.forEach((card) => {
  const button = card.querySelector('.expand-button');
  const body = card.querySelector('.card-body');
  button.addEventListener('click', () => {
    if (body.classList.contains('show')) {
      body.classList.remove('show');
      button.innerText = 'Expand';
    } else {
      body.classList.add('show');
      button.innerText = 'Collapse';
    }
  });
});

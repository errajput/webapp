console.log('JS-DOM');

const student = { name: 'Ram', course: 'Web' };

// const h1 = document.all[6];
// 1- Element Select
const headingElement = document.querySelector('h1');

// 2- Element Change
headingElement.innerHTML = 'Web Development';
headingElement.style.color = 'red';

const valueElement = document.querySelector('input');
const addButtonElement = document.querySelector('.addButton');
const unOrderListElement = document.querySelector('ul');
const removeButtons = document.querySelectorAll('.removeButton');

function addValue() {
if (valueElement.value) {
  // console.log(valueElement.value);
  //   4- Element Create
  //TODO: Handle Empty Space in value
  const liElement = document.createElement('li');
  const removeButton = document.createElement('button');

  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', removeValue);

  liElement.innerHTML = valueElement.value;
  liElement.append(removeButton);
  valueElement.value = '';

  unOrderListElement.append(liElement);
}
else {
    alert('No Value to Add.');
  }
}
function removeValue(e) {
  
  console.log('Remove Button Clicked');
  
  e.srcElement.parentElement.remove();
}

// 3- Action
addButtonElement.addEventListener('click', addValue);

removeButtons.forEach(function (removeButton) {
  removeButton.addEventListener('click', removeValue);
});
const values = ['HTML', 'CSS'];
// 1: Set the text of the <h1> element
let title = document.getElementsByTagName('h1')[0];
title.innerHTML = 'Fun stuff to do!';

// 2: Set the color of the <h1> to a different color
title.style.color = 'lime';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.querySelector('.desc');
description.innerHTML = 'This is a list of <strong><em>fun</strong></em> stuff I want to do today';

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = '<input> Surf';
list.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i += 1) {
    inputs[i].type = 'checkbox';
}
// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button');
deleteButton.innerHTML = 'Delete';
const extra = document.querySelector('div .extra');
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
deleteButton.addEventListener('click', () => {
    container.removeChild(extra);
});
 
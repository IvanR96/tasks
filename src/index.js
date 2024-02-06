import _, { forEach } from 'lodash';
import './style.css';

const button = document.querySelector('button');

button.addEventListener("click", function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const checklist = document.getElementById('checklist').value.split(',').map(item => item.trim());
    const notes = document.getElementById('notes').value;

    const todo = new Todo(title, description, checklist, notes);
    addTodoToHTML(todo);
    
});



class Todo{
    constructor(title, description, checklist = [], notes = ''){
        this.title = title;
        this.description = description;
        this.checklist = checklist;
        this.notes = notes;
        this.completed = false;
    }
}



function addTodoToHTML(todo) {
    const todoList = document.getElementById('todoContainer');

    // Create list item element
    const listItem = document.createElement('li');
    listItem.id = 'list';

    // Create and set content for the list item
    listItem.innerHTML = `<div>
                          <strong>${todo.title}</strong><br>
                          <em>- ${todo.description}</em><br>
                          ${createChecklistHTML(todo.checklist)}<br>
                          Notes: ${todo.notes}
                          </div>`;

    // Append the list item to the todoList
    todoList.appendChild(listItem);
}

function createChecklistHTML(checklist) {
    return checklist.map(item => `<input type="checkbox">${item}`).join('<br>');
}

function createHeader(){
    const header = document.getElementById('header');

    const title = document.createElement('h1');
    title.textContent = 'Project Organizer';

    header.appendChild(title);
}


function app(){

    const proj = document.getElementById('todoContainer');

    
    createHeader();



}




app();
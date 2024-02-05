import _, { forEach } from 'lodash';
import './style.css';

class Todo{
    constructor(title, description, checklist = [], notes = ''){
        this.title = title;
        this.description = description;
        this.checklist = checklist;
        this.notes = notes;
        this.completed = false;
    }
}

function createTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const checklist = document.getElementById('checklist').value.split(',').map(item => item.trim());
    const notes = document.getElementById('notes').value;

    const todo = new Todo(title, description, checklist, notes);
    addTodoToHTML(todo);
}


function addTodoToHTML(todo) {
    const todoList = document.getElementById('todoContainer');

    // Create list item element
    const listItem = document.createElement('li');

    // Create and set content for the list item
    listItem.innerHTML = `<strong>${todo.title}</strong><br>
                          <em>- ${todo.description}</em><br>
                          ${createChecklistHTML(todo.checklist)}<br>
                          Notes: ${todo.notes}`;

    // Append the list item to the todoList
    todoList.appendChild(listItem);
}

function createChecklistHTML(checklist) {
    return checklist.map(item => `<input type="checkbox">${item}`).join('<br>');
}


function app(){


    



}




app();
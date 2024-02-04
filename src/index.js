import _, { forEach } from 'lodash';

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

function createForm(){
    const form = document.createElement('form');
    form.id = 'todoForm';

    form.innerHTML = `<label for="title">Title:</label>
    <input type="text" id="title" required><br>

    <label for="description">Description:</label>
    <input type="text" id="description" required><br>

    <label for="checklist">Checklist (comma-separated):</label>
    <input type="text" id="checklist"><br>

    <label for="notes">Notes:</label>
    <textarea id="notes"></textarea><br>

    <button type="button" onclick="createTodo()">Add Todo</button>`;


}

function app(){

    const header = document.createElement('div');

    const title = document. createElement('h1');
    title.textContent = "Todo List";

    header.appendChild(title);


    const appContainter = document.getElementById('app');

    appContainter.appendChild(header);

    // create project div

    //create form here
    
    // todo container div
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todoContainer';

    const create = createForm();

    todoContainer.append(create);

    

    appContainter.appendChild(todoContainer);


    const myTodo = createTodo(
        'Learn JavaScript',
        'Finish the tutorial on classes',
        ['Read documentation', 'Practice coding'],
        'Take notes on key concepts'
    );

    addTodoToHTML(myTodo);

    



}




app();
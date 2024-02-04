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

function createTodo(title, description, checklist, notes){
    return new Todo(title, description, checklist, notes);
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

    const header = document.createElement('div');

    const title = document. createElement('h1');
    title.textContent = "Todo List";

    header.appendChild(title);


    const appContainter = document.getElementById('app');

    appContainter.appendChild(header);

    // create project div
    
    // todo container div
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todoContainer';

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
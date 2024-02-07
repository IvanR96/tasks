import _ from 'lodash';
import './style.css';

const todo = [];
const projects = []

class Todo{
    constructor(title, dueDate, checkList = [], priority){
        this.title = title;
        this.dueDate = dueDate;
        this.checkList = checkList;
        this.priority = priority;
    }

}

class Project{
    constructor(name){
        this.name = name;
    }
}

function createHeader(){
    const header = document.getElementById('header');

    const title = document.createElement('h1');
    title.textContent = 'Todo Organizer';

    header.appendChild(title);
}


function createProject(){
    const projectName = document.getElementById('newProjectName').value;

    const project = new Project(projectName);

    projects.push(project);

    document.getElementById('newProjectName').value = '';

    const addProject = document.getElementById('projectContainer');

    const projectDiv = document.createElement('div');
    projectDiv.id = 'projectDiv';

    projectDiv.textContent = project.name;

    addProject.appendChild(projectDiv);

    

    //console.log("Project added to library: ", project);


}



createHeader();

document.getElementById('addProjectButton').addEventListener('click', createProject);

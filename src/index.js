import _ from 'lodash';


function app(){

    const header = document.createElement('div');

    const title = document. createElement('h1');
    title.textContent = "Todo List";

    header.appendChild(title);


    const appContainter = document.getElementById('app');

    appContainter.appendChild(header);
    

    const projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';






}


app();
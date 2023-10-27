

const tittleElement = document.querySelector('#tittle');
tittleElement.addEventListener('mouseover', ()=>{
    tittleElement.style.color = 'brown';
    
} );

const listElement = document.querySelector('#list');
listElement.style.color = 'Red';

const ullistElement = document.querySelector('#ullist');
const jiraElement = document.querySelector('#jira');
ullistElement.removeChild(jiraElement);


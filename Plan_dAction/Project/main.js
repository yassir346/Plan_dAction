const addButtonBacklog = document.getElementById('backlogADDbtn');
const form = document.getElementById('form');

addButtonBacklog.addEventListener("click", function(){
    form.style = "display: flex; justify-content: center;";
});

const backlogAdd = document.getElementById("backlog-add");
const submitTask = document.getElementById("submit-task");

submitTask.addEventListener("click", function(){

const titre = document.getElementById("titre").value;
const description = document.getElementById("description").value;

backlogAdd.insertAdjacentHTML("beforeend", `<div> ${titre} ${description}</div>`);

document.getElementById("titre").value = '';

form.style = "display: none;";

});
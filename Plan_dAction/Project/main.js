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
const titreSansEspace = titre.split(" ").join(""); 

backlogAdd.insertAdjacentHTML("beforeend", `<div id="${titreSansEspace}"> ${titre} ${description} <button  onclick="deleteTask(${titreSansEspace})">Delete</button></div>`);

document.getElementById("titre").value = '';
document.getElementById("description").value = '';

form.style = "display: none;";

});

function deleteTask(taskToDelete){
    taskToDelete.remove();
}






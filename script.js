var addButton = document.getElementById("add-button"); 
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked");
}

var clearCompletedButton = document.getElementById("clear-completed-button");
clearCompletedButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
    alert("Clear Completed button clicked");
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
    alert("Empty List button clicked");
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveList() {
    alert("Save List button clicked");
}
const inputTask = document.querySelector('.inputTask');
const btnAddTask = document.querySelector('.btnAddTask');
const toDoList = document.querySelector('.toDoList');

function addLi () {
  const li = document.createElement('li');
  return li;
}

inputTask.addEventListener('keypress', function(event){
  if (event.keyCode === 13){
    if (!inputTask.value) return (alert('Informe alguma Task.'));
      addTask(inputTask.value);
  }
})

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function addTask(inputText){
  const li = addLi();
  li.innerText = inputText;
  toDoList.appendChild(li);
  clearInput();
  addBtnRemoveTask(li);
  saveToDoList();
}

function addBtnRemoveTask (li){
  li.innerText += '   ';
  const btnRemoveTask = document.createElement('button');
  btnRemoveTask.innerText = 'Apagar';
  btnRemoveTask.setAttribute('class', 'removeTask')
  li.appendChild(btnRemoveTask);
}

btnAddTask.addEventListener('click', function(event) {
  if (!inputTask.value) return (alert('Informe alguma Tarefa.'));
  addTask(inputTask.value);
});

document.addEventListener('click', function (event){
  const elemen = event.target;

  if (elemen.classList.contains('removeTask')) {
    elemen.parentElement.remove();
    saveToDoList();
  }
})

function saveToDoList() {
  const toDoList = document.querySelectorAll('li');
  const arrayToDoList = [];

  for (let task of toDoList) {
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    arrayToDoList.push(taskText);
  }

  const toDoListJSON = JSON.stringify(arrayToDoList);
  localStorage.setItem('toDoList', toDoListJSON);
}

function restoreToDoList () {
  const toDoList = localStorage.getItem('toDoList');
  const arrayToDoList = JSON.parse(toDoList);

  for (let task of arrayToDoList) {
    addTask(task);
  }
}
restoreToDoList();
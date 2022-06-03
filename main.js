const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const noTask = document.querySelector('.no-tasks');
let counter = 0;

// const LIST_LS = "tasks";
// let tasks = [];
// localStorage.setItem("task_list", JSON.stringify(tasks));
// let localStorageTasks = JSON.parse(localStorage.getItem("task_list"));

// loadStorage();

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
})

// function loadStorage() {

//   const loadStorage = localStorage.getItem(LIST_LS);

//   if (!loadStorage) {
//     return;
//   }

//   const parseList = JSON.parse(loadStorage);
//   // parseList.forEach(task => createItem(task));


//   for (let i = 0; i < parseList.length; i++) {
//     createItem(parseList[i]);
//   }

// }

// function saveStorage() {
//   localStorage.setItem(LIST_LS, JSON.stringify(tasks));
// }


function onAdd() {
  const text = input.value;

  const task = createItem(text);
  taskList.appendChild(task);

  // tasks.push(text);
  // saveStorage();

  input.value = '';
  input.focus();
  setCount();
}

function createItem(name) {
  const taskRow  = document.createElement('li');
  taskRow.setAttribute('class', 'task-row');

  taskList.appendChild(taskRow);
  // tasks.push(name);
  counter++;

  const task = document.createElement('div');
  task.setAttribute('class', 'task');

  taskRow.appendChild(task);

  const div = document.createElement('div');

  task.appendChild(div);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.setAttribute('type', 'checkbox');

  const taskName = document.createElement('span');
  taskName.setAttribute('class', 'task-name');
  taskName.innerText = name;

  div.appendChild(checkbox);
  div.appendChild(taskName);

  const deleteBtn = document.createElement('div');
  deleteBtn.setAttribute('class', 'deleteBtn');
  deleteBtn.innerHTML = `<i class="fa-solid fa-circle-minus fa-lg"></i>`;

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskRow);
    // tasks.pop(taskName);
    counter--;
    setCount();
  })

  task.appendChild(deleteBtn);

  const inputCheckbox = taskRow.querySelector('.checkbox');
  checkbox.addEventListener('click', () => {
    if (inputCheckbox.checked == true) {
      taskName.style.color = "#b9b9b9";
      taskRow.style.backgroundColor = "#F9F9F9";
    } else {
      taskName.style.color = "black";
      taskRow.style.backgroundColor = "#FFFFFF";
    }
  })

  return taskRow;
}

function setCount() {
  if (counter === 0) {
    noTask.innerText = `No tasks`;
  } else {
    if (counter === 1) {
      noTask.innerText = `${counter} task`;
    } else {
      noTask.innerText = `${counter} tasks`;
    }
  }
}
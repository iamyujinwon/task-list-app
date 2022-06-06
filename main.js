const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const noTask = document.querySelector('.no-tasks');
let counter = 0;
let tasks = [];

loadStorage();

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
})

function loadStorage() {
  const localStorageTasks = JSON.parse(localStorage.getItem("task_list"));
  const localStorageCounter = JSON.parse(localStorage.getItem("task_counter"));

  setCount(localStorageCounter);

  if (localStorageTasks === null) {
    return;
  }

  localStorageTasks.forEach(task => tasks.push(task));
  console.log(tasks);

  localStorageTasks.forEach(task => createItem(task));
}

function setLocalStorage(tasks) {
  localStorage.setItem("task_list", JSON.stringify(tasks));
}

function onAdd() {
  const text = input.value;

  if (text === '') {
    return;
  }

  createItem(text);

  tasks.push(text);
  console.log(tasks);
  setLocalStorage(tasks);

  input.value = '';
  input.focus();
  setCount(counter);
}

function createItem(name) {
  const taskRow  = document.createElement('li');
  taskRow.setAttribute('class', 'task-row');
  taskList.appendChild(taskRow);
  taskRow.id = counter;

  counter++;
  localStorage.setItem("task_counter", JSON.stringify(counter));

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
    tasks = tasks.filter((e) => e !== name);
    setLocalStorage(tasks);

    counter--;
    localStorage.setItem("task_counter", JSON.stringify(counter));

    setCount(counter);
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
}

function setCount(counter) {
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
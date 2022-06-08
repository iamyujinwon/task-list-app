const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const noTask = document.querySelector('.no-tasks');
const clearBtn = document.querySelector('.clearBtn');
let tasks = [];

loadStorage();

input.addEventListener('keydown', e => {
  if(e.isComposing) {
    return;
  }
  if (e.key === 'Enter') {
    onAdd();
  }
});

clearBtn.addEventListener('click', () => {
  if (tasks.length !== 0) {
    tasks = [];
    taskList.innerHTML = '';
    setLocalStorage(tasks);

    setCount(tasks.length);
  }
});

taskList.addEventListener('click', e => {
  const id = e.target.dataset.id;
  const taskRow = document.querySelector(`.task-row[data-id="${id}"]`);

  if (e.target.className === 'fa-solid fa-circle-minus fa-lg') {
    taskRow.remove();
    tasks = tasks.filter(task => task.id !== +id);

    setLocalStorage(tasks);
    setCount(tasks.length);
  } else if (e.target.className === 'checkbox') {
    if (e.target.checked === true) {
      taskRow.style.backgroundColor = "#E8E4DF";
      taskRow.querySelector('.task-name').style.color = "#b9b9b9";
    } else {
      taskRow.style.backgroundColor = "#FFFFFF";
      taskRow.querySelector('.task-name').style.color = "black";
    }
    setLocalStorage(tasks)
  }
});

function loadStorage() {
  const localStorageTasks = JSON.parse(localStorage.getItem("task_list"));

  if (localStorageTasks === null) {
    return;
  }
  localStorageTasks.forEach(task => createItem(task.text));
  setCount(tasks.length);
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

  input.value = '';
  input.focus();
  setCount(tasks.length);
}

function createItem(name) {
  const id = tasks.length;
  const taskRow  = document.createElement('li');
  taskRow.setAttribute('class', 'task-row');
  taskRow.setAttribute('data-id', id)
  taskRow.innerHTML = `
    <div class="task">
      <div>
        <input class="checkbox" type="checkbox" data-id=${id}></input>
        <span class="task-name">${name}</span>
      </div>
      <div class="deleteBtn">
        <i class="fa-solid fa-circle-minus fa-lg" data-id=${id}></i>
      </div>
    </div>
  `

  taskList.appendChild(taskRow);

  tasks.push({id, "text": name});
  console.log(tasks);
  setLocalStorage(tasks);
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
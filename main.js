const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const noTask = document.querySelector('.no-tasks');
let counter = 0;
let tasks = [];
let id = 0; //UUID

// loadStorage();

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

taskList.addEventListener('click', e => {
  const id = e.target.dataset.id;
  if (e.target.className === 'fa-solid fa-circle-minus fa-lg') {
    const toBeDeleted = document.querySelector(`.task-row[data-id="${id}"]`);
    toBeDeleted.remove();
    // tasks = tasks.filter(task => task.id !== +id);
    // setLocalStorage(tasks);
    
    counter--;
    // localStorage.setItem("task_counter", JSON.stringify(counter));
    setCount(counter);
  } else if (e.target.className === 'checkbox') {
    const taskRow = document.querySelector(`.task-row[data-id="${id}"]`);
    if (e.target.checked === true) {
      taskRow.style.backgroundColor = "#E8E4DF";
      taskRow.querySelector('.task-name').style.color = "#b9b9b9";
    } else {
      taskRow.style.backgroundColor = "#FFFFFF";
      taskRow.querySelector('.task-name').style.color = "black";
    }
  }
});

// function loadStorage() {
//   const localStorageTasks = JSON.parse(localStorage.getItem("task_list"));
//   const localStorageCounter = JSON.parse(localStorage.getItem("task_counter"));

//   setCount(localStorageCounter);

//   if (localStorageTasks === null) {
//     return;
//   }

//   localStorageTasks.forEach(task => tasks.push(task));
//   localStorageTasks.forEach(task => createItem(task.text));
// }

// function setLocalStorage(tasks) {
//   localStorage.setItem("task_list", JSON.stringify(tasks));
// }

function onAdd() {
  const text = input.value;

  if (text === '') {
    return;
  }

  createItem(text);
  // tasks.push({"id": (id -1), "text": text});
  // setLocalStorage(tasks);

  input.value = '';
  input.focus();
  setCount(counter);
}

function createItem(name) {
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
  id++;
  // localStorage.setItem("id", JSON.stringify(id));

  counter++;
  // localStorage.setItem("task_counter", JSON.stringify(counter));
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
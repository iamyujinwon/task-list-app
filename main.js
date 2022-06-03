const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const noTask = document.querySelector('.no-tasks');
let counter = 0;

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    onAdd();
  }
})

function onAdd() {
  const taskName = input.value;

  if (taskName === '') {
    return;
  } 

  const taskRow  = document.createElement('li');
  taskRow.setAttribute('class', 'task-row');

  taskRow.innerHTML = `
    <div class="task">
      <div>
        <input type="checkbox" class="checkbox"/>
        <span class="checkmark"></span>
        <span class="task-name">${taskName}</span>
      </div>
      <div class="deleteBtn">
        <i class="fa-solid fa-circle-minus fa-lg"></i>
      </div>
    </div>
  `
  taskList.appendChild(taskRow);
  counter++;

  const deleteBtn = taskRow.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskRow);
    counter--;
    setCount();
  })

  const name = taskRow.querySelector('.task-name');
  const checkbox = taskRow.querySelector('.checkbox');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked == true) {
      name.style.color = "#b9b9b9";
      taskRow.style.backgroundColor = "#F9F9F9";
    } else {
      name.style.color = "black";
      taskRow.style.backgroundColor = "#FFFFFF";
    }
  })

  input.value = '';
  input.focus();
  setCount();
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

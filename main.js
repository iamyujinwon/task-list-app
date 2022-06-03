let input = document.querySelector('input');
let task;
const taskList = document.querySelector("#task-list");
let counter = 0;
const noTask = document.querySelector("#no-tasks");

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    task = input.value;

    if (task != "") {
      clearInput();
      addTask();
      isEmpty();
    }
  }
});

function addTask() {
  const div = document.createElement('div');
  div.setAttribute("class", "to-do");

  div.innerHTML = `
    <div class="content">
      <input class="checkbox" type="checkbox">
      <div class="task-title">${task}</div>
    </div>
    <i class="fa-solid fa-circle-minus fa-lg"></i>
  `;

  taskList.appendChild(div);
  counter++;

  const remover = div.querySelector(".fa-circle-minus");
  remover.addEventListener("click", e => {
    const minusButton = e.target;
    const toDo = minusButton.parentNode;
    taskList.removeChild(toDo);
    counter--;

    isEmpty();
  });

  const checkbox = div.querySelector(".checkbox");
  const taskTitle = div.querySelector(".task-title");
  checkbox.addEventListener("click", e => {
    if (checkbox.checked == true) {
      taskTitle.style.color = "#b9b9b9";
    } else {
      taskTitle.style.color = "black";
    }
  });
}

function clearInput() {
  input.value= "";
}

function isEmpty() {
  if (counter > 0) {
    noTask.style.display = "none";
  } else {
    noTask.style.display = "block";
  }
}

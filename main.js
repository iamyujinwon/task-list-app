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

  const task = createItem(taskName);
  taskList.appendChild(task);
  counter++;

  input.value = '';
  input.focus();
  isEmpty();
}

function isEmpty() {
  if (counter > 0) {
    noTask.style.display = "none";
  } else {
    noTask.style.display = "block";
  }
}

function createItem(name) {

  const taskRow  = document.createElement('li');
  taskRow.setAttribute('class', 'task-row');

  // taskRow.innerHTML = `
  //   <div class="task">
  //     <div>
  //       <input type="checkbox" class="checkbox"/>
  //       <span class="task-name">${name}</span>
  //     </div>
  //     <div class="deleteBtn">
  //       <i class="fa-solid fa-circle-minus fa-lg"></i>
  //     </div>
  //   </div>
  // `
  taskList.appendChild(taskRow);

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
    counter--;
    isEmpty();
  })

  task.appendChild(deleteBtn);

  return taskRow;
}



// let input = document.querySelector('input');
// let task;
// const taskList = document.querySelector("#task-list");
// let counter = 0;
// const noTask = document.querySelector("#no-tasks");

// input.addEventListener('keypress', e => {
//   if (e.key === 'Enter') {
//     task = input.value;

//     if (task != "") {
//       clearInput();
//       addTask();
//       isEmpty();
//     }
//   }
// });

// function addTask() {
//   const div = document.createElement('div');
//   div.setAttribute("class", "task");

//   div.innerHTML = `
//     <div class="content">
//       <input class="checkbox" type="checkbox">
//       <div class="task-title">${task}</div>
//     </div>
//     <i class="fa-solid fa-circle-minus fa-lg"></i>
//   `;

//   taskList.appendChild(div);
//   counter++;

//   const remover = div.querySelector(".fa-circle-minus");
//   remover.addEventListener("click", e => {
//     const minusButton = e.target;
//     const toDo = minusButton.parentNode;
//     taskList.removeChild(toDo);
//     counter--;

//     isEmpty();
//   });

//   const checkbox = div.querySelector(".checkbox");
//   const taskTitle = div.querySelector(".task-title");
//   checkbox.addEventListener("click", e => {
//     if (checkbox.checked == true) {
//       taskTitle.style.color = "#b9b9b9";
//     } else {
//       taskTitle.style.color = "black";
//     }
//   });
// }

// function clearInput() {
//   input.value= "";
// }

// function isEmpty() {
//   if (counter > 0) {
//     noTask.style.display = "none";
//   } else {
//     noTask.style.display = "block";
//   }
// }

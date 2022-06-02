{/* <div class="to-do">
<div class="content">
  <input class="checkbox" type="checkbox">
  <div class="task-title"></div>
</div>
<i class="fa fa-trash-o fa-lg"></i>
</div> */}



let input = document.querySelector('input');
let task;
const taskList = document.querySelector("#task-list")

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    task = input.value;
    input.value= "";
    
    addRow();
  }
});

function addRow() {
  const div = document.createElement('div');

  div.className = 'to-do';

  div.innerHTML = `
    <div class="content">
      <input class="checkbox" type="checkbox">
      <div class="task-title">${task}</div>
    </div>
    <i class="fa fa-trash-o fa-lg"></i>
  `;

  taskList.appendChild(div);
}

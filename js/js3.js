'use strict';
{
  const tasks = [];

  const showTask = () => {
    const tbody = document.querySelector('tbody');

    //clear screen
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    tasks.forEach(task => {
      const row = tbody.insertRow();

      const idCell = row.insertCell();
      const id = document.createTextNode(task.id);
      idCell.appendChild(id);

      const commentCell = row.insertCell();
      const comment = document.createTextNode(task.comment);
      commentCell.appendChild(comment);

      const statusCell = row.insertCell();
      const statusBtn = document.createElement("button");
      statusBtn.textContent = task.status;
      statusCell.appendChild(statusBtn);

      const deleteCell = row.insertCell();
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "削除";
      deleteCell.appendChild(deleteBtn);

     //delete task
        deleteBtn.onclick = () => {
          tasks.splice(task.id, 1);
          tasks.forEach((task, index) => {
            task.id = index;
          });
          showTask();
        }
    });
  }
  
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    //save task
    const inputTask = document.getElementById('input_task');
    tasks.push({id: tasks.length, comment: inputTask.value, status: "作業中"});

    showTask();

    //clear form
    inputTask.value = "";
  });

}

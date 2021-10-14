'use strict';
{
  const tasks = [];

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    //save task
    const task = document.getElementById('input_task');
    tasks.push({id: tasks.length, comment: task.value, status: "作業中"});

    const tbody = document.querySelector('tbody');

    //clear screen
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    //output on screen
    for (let i = 0; i < tasks.length; i++){
      const row = tbody.insertRow();

      const idCell = row.insertCell();
      const id = document.createTextNode(tasks[i].id);
      idCell.appendChild(id);

      const commentCell = row.insertCell();
      const comment = document.createTextNode(tasks[i].comment);
      commentCell.appendChild(comment);

      const statusCell = row.insertCell();
      const statusBtn = document.createElement("BUTTON");
      statusBtn.innerHTML = tasks[i].status;
      statusCell.appendChild(statusBtn);

      const deleteCell = row.insertCell();
      const deleteBtn = document.createElement("BUTTON");
      deleteBtn.innerHTML = "削除";
      deleteCell.appendChild(deleteBtn);
    }

    //clear form
    task.value = "";
  });
}

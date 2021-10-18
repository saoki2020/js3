'use strict';
{
  const tasks = [];

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    //save task
    const task = document.getElementById('input_task');
    tasks.push({id: tasks.length, comment: task.value, status: "作業中"});

    const tbody = document.querySelector('tbody');

    //output on screen
    const show_task = () => {
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
        const statusBtn = document.createElement("BUTTON");
        statusBtn.textContent = task.status;
        statusCell.appendChild(statusBtn);

        const deleteCell = row.insertCell();
        const deleteBtn = document.createElement("BUTTON");
        deleteBtn.textContent = "削除";
        deleteCell.appendChild(deleteBtn);
      });
      //clear form
      task.value = "";
    }
    show_task();
  });
}

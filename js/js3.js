'use strict';
{
  const tasks = [];

  //radio button
  const radioBtn = document.getElementById('radio_btn');
  radioBtn.addEventListener('change', () => {
    showTask();
  });

  const showTask = () => {
    const tbody = document.querySelector('tbody');

    //filter
    let filteredTasks = [];
    if (radioBtn.task_status.value === 'working') {
      filteredTasks = tasks.filter(task => task.status === "作業中");
    } else if (radioBtn.task_status.value === 'complete') {
      filteredTasks = tasks.filter(task => task.status === "完了");
    } else {
      filteredTasks = tasks;
    }

    //clear screen
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    filteredTasks.forEach(task => {
      const row = tbody.insertRow();

      const idCell = row.insertCell();
      const id = document.createTextNode(task.id);
      idCell.appendChild(id);

      const commentCell = row.insertCell();
      const comment = document.createTextNode(task.comment);
      commentCell.appendChild(comment);

      const statusCell = row.insertCell();
      const statusBtn = document.createElement('button');
      statusBtn.textContent = task.status;
      statusCell.appendChild(statusBtn);

      //change status
      statusBtn.addEventListener('click', () => {
        if (task.status === "作業中") {
          task.status = "完了";
        } else {
          task.status = "作業中";
        }
        statusBtn.textContent = task.status;
        showTask();
      });

      const deleteCell = row.insertCell();
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "削除";
      deleteCell.appendChild(deleteBtn);

      //delete task
      deleteBtn.addEventListener('click', () => {
        tasks.splice(task.id, 1);
        tasks.forEach((task, index) => {
          task.id = index;
        });
        showTask();
      });
    });
  }

  document.getElementById('input_task').addEventListener('submit', (e) => {
    e.preventDefault();

    //save task
    const inputTask = document.getElementById('task_content');
    tasks.push({id: tasks.length, comment: inputTask.value, status: "作業中"});

    showTask();

    //clear form
    inputTask.value = "";
  });

}

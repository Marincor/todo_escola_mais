 // mark the task //

 export default function taskStatus(e) {
    const taskTitle = e.target.nextElementSibling;
    const task =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    const button = e.target;

    if (taskTitle.classList.contains("done")) {
      taskTitle.classList.remove("done");
      task.classList.remove("done");
      button.textContent = "concluir ✓";
      button.classList.remove("undoneButton");
    } else {
      taskTitle.classList.add("done");
      task.classList.add("done");
      button.textContent = "pendenciar !";
      button.classList.add("undoneButton");
    }
  }

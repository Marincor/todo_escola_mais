 // show the task //

 export default function handleTask(e) {
    const task = e.target.nextElementSibling;
    const button = e.target;

    if (task.classList.contains("showTask")) {
      task.classList.remove("showTask");
      button.textContent = "▼";
    } else {
      task.classList.add("showTask");
      button.textContent = "▲";
    }
  }
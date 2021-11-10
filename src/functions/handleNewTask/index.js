// create task //

import createTask from "../../services/User/newTask";

export default function handleNewTask(task) {
  try {

    //request - Post//

    createTask(task.title, task.body, task.id).then((json) => {
      alert("Tarefa criada, cheque o console para confirmar!");

      console.log(json);
    });
  } catch (error) {
    console.log(error);
  }

  // getting inputs to clean //

  const inputTitle = document.querySelector(`[data-input-title]`);
  const inputBody = document.querySelector(`[data-input-body]`);

  setTimeout(() => {
    inputTitle.value = "";
    inputBody.value = "";
  }, 100);

}

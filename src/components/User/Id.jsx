import { useContext, useEffect } from "react";
import { UserIdContext } from "../../contexts/User/id";
import { NewTaskUserContext } from "../../contexts/User/newTask";
import getUserById from "../../services/User/id";
import createTask from "../../services/User/newTask";
import { Container } from "../UI";
import {
  ButtonDone,
  ButtonForm,
  ButtonTask,
  Fieldset,
  Input,
  ItemTask,
  Legend,
  ListTask,
  Task,
  TaskName,
  TitleUserId,
} from "./styles";

export default function UserId({ id }) {
  const { userInfo, setUserInfo } = useContext(UserIdContext);
  const { task, setTask } = useContext(NewTaskUserContext);

  useEffect(() => {
    // api request, getting user by id //

    try {
      console.log("loading");
      getUserById(id).then((res) => setUserInfo(res));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("loading off");
    }
  }, [id]);

  // show the task //

  function handleTask(e) {
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

  // mark the task //

  function taskStatus(e) {
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

  // create task //

  function handleTask() {
    createTask(task.title, task.body, task.id).then((json) => {
      alert("Tarefa criada, cheque o console para confirmar!");

      console.log(json);
    });

    const inputTitle = document.querySelector(`[data-input-title]`);
    const inputBody = document.querySelector(`[data-input-body]`);

    setTimeout(() => {
      inputTitle.value = "";
      inputBody.value = "";
    }, 100);

    console.log(inputTitle);
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleTask();
        }}
      >
        <Fieldset>
          <Legend>Adicionar nova tarefa</Legend>

          <Input
            data-input-title
            type="text"
            placeholder="Título"
            title="Escreva um título para sua tarefa"
            required
            value={task.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
          />
          <Input
            data-input-body
            type="text"
            placeholder="Descrição"
            title="Escreva uma descrição para sua tarefa"
            required
            value={task.body}
            onChange={(e) => {
              setTask({ ...task, body: e.target.value, id: +id });
            }}
          />
          <ButtonForm>Criar</ButtonForm>
        </Fieldset>
      </form>
      <TitleUserId> Tarefas do usuário {id}: </TitleUserId>
      <ListTask>
        {userInfo?.map((task) => {
          return (
            <ItemTask>
              <ButtonDone
                onClick={(e) => {
                  e.preventDefault();
                  taskStatus(e);
                }}
              >
                concluir ✓
              </ButtonDone>
              <TaskName>{task.title}</TaskName>

              <ButtonTask
                onClick={(e) => {
                  e.preventDefault();
                  handleTask(e);
                }}
              >
                ▼
              </ButtonTask>
              <Task>{task.body}</Task>
            </ItemTask>
          );
        })}
      </ListTask>
    </Container>
  );
}

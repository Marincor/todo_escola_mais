import { useContext, useEffect } from "react";
import { UserIdContext } from "../../contexts/User/id";
import getUserById from "../../services/User/id";
import { Button, Container } from "../UI";
import {
  ButtonDone,
  ButtonForm,
  ButtonTask,
  Fieldset,
  Form,
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

  console.log(userInfo);

  // show the task //

  function handleTask(e) {
    const task = e.target.nextElementSibling;
    const button = e.target;

    console.log(button);
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

    console.log(taskTitle);
  }

  return (
    <Container>
      <form>
        <Fieldset>
          <Legend>Adicionar nova tarefa</Legend>

          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Descrição" />
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

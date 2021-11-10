import { useContext, useEffect } from "react";
import { UserIdContext } from "../../contexts/User/id";
import { NewTaskUserContext } from "../../contexts/User/newTask";
import handleNewTask from "../../functions/handleNewTask";
import handleTask from "../../functions/handleTask";
import taskStatus from "../../functions/taskStatus";
import getUserById from "../../services/User/id";
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
  // context of task's of current user //
  const { userInfo, setUserInfo } = useContext(UserIdContext);

  // context of new task //
  const { task, setTask } = useContext(NewTaskUserContext);

  console.log(userInfo);

  useEffect(() => {
    // api request, getting user by Id //

    try {
      console.log("loading");
      getUserById(id).then((res) => setUserInfo(res));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("loading off");
    }
  }, [id]);

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleNewTask(task);
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

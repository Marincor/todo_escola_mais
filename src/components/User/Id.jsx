import { useContext, useEffect } from "react";
import { UserIdContext } from "../../contexts/User/id";
import getUserById from "../../services/User/id";
import { Button, Container } from "../UI";
import {
  ButtonDone,
  ButtonTask,
  ItemTask,
  ListTask,
  Task,
  TaskName,
  TitleUserId
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
    const task = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    const button = e.target;

  
  

    if(taskTitle.classList.contains("done")) {

      taskTitle.classList.remove("done");
      task.classList.remove("done");
      button.textContent = "concluído ✓";
      button.classList.remove("undoneButton");

    } else{

      taskTitle.classList.add("done");
      task.classList.add("done");
      button.textContent = "pendente !";
      button.classList.add("undoneButton");
    }

    console.log(taskTitle)

  }

  return (
    <Container>
      <TitleUserId> Tarefas do usuário {id}: </TitleUserId>
        <form>
            <fieldset>
              <legend>Adicionar nova tarefa</legend>

              <input type="text" placeholder="Título" />
              <input type="text" placeholder="Descrição" />
              <button>criar</button>
            </fieldset>

        </form>
      <ListTask>
        {userInfo?.map((task) => {
          return (
            <ItemTask>
              <ButtonDone onClick={(e)=>{e.preventDefault(); taskStatus(e)}}>
                
                
                concluído ✓

                
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

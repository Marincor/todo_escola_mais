import { useContext, useEffect } from "react";
import { UserIdContext } from "../../contexts/User/id";
import getUserById from "../../services/User/id";
import { Container } from "../UI";
import {
  ButtonTask,
  ItemTask,
  List,
  ListItem,
  ListTask,
  Task,
  TaskName,
  TitleUserId,
  Username,
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

  return (
    <Container>
      <TitleUserId> Tarefas do usuário {id}: </TitleUserId>
      <ListTask>
        {userInfo?.map((task) => {
          return (
            <ItemTask>
              <TaskName>{task.title} </TaskName>
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

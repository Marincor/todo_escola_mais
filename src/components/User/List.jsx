import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserListContext } from "../../contexts/User/list";
import { Button, Container } from "../UI";
import { List, ListItem, TitleUserList, Username } from "./styles";

export default function UserList() {
  const { userList } = useContext(UserListContext);

  let numberOfUsers = 0;

  // counting the amount of users //

  function getAmountUsers() {
    let count = 0;

    while (count < userList.length) {
      let findUser = userList.find((item) => item.userId === count);

      if (findUser) {
        numberOfUsers += 1;
      }

      count++;
    }
  }

  getAmountUsers();
  console.log(numberOfUsers);

  // creating array to the amount of users //

  const arrUsers = Array(10).fill("user");

  return (
    <Container>
      <TitleUserList>Lista de usuários:</TitleUserList>

      <List>
        {arrUsers.map((user, index) => {
          return (
            <ListItem key={`user - ${index}`}>
              <Username> 👤 Usuário {index + 1}</Username>

              <Link className="link" to={`/user/${index + 1}`}>
                <Button>Tarefas do usuário</Button>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

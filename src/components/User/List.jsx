import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserListContext } from "../../contexts/User/list";
import getAmountUsers from "../../functions/amountUsers";
import { Button, Container } from "../UI";
import { List, ListItem, TitleUserList, Username } from "./styles";

export default function UserList() {
  const { userList } = useContext(UserListContext);

  // getting amount of current Users //

  const users = getAmountUsers(userList);

  // creating array to the amount of users //

  const arrUsers = Array(users).fill("user");

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

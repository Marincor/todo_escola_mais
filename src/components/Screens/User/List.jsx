import UserList from "../../User/List";
import { Backgrounds } from "../../UI/Backgrounds";
import { Container } from "../../UI";

export default function ScreensUserList() {
  return (
    <Container bg={Backgrounds[4]}>
      <UserList />
    </Container>
  );
}

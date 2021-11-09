import { Logo, Container, Header, Icon } from "../../UI";
import LogoImg from "./../../../assets/img/logo.png";
import TodoImg from "../../../assets/img/to do.jpg";
import { Backgrounds } from "../../UI/Backgrounds";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserIdContext } from "../../../contexts/User/id";
import { UserListContext } from "../../../contexts/User/list";

export default function ScreensUserId() {
  const { id } = useParams();

  const { userId, setUserId } = useContext(UserIdContext);

  const { userList } = useContext(UserListContext);

  useEffect(() => {
    // get the id params url //

    setUserId(id);
  }, []);

  const currentUserExist = userList.find((user) => user.userId === +userId);

  console.log(currentUserExist);

  return (
    <>
      <Header>
        <a href="/">
          <Logo src={LogoImg} alt="escola_mais-icon" title="escola mais" />
          <Icon src={TodoImg} alt="toDo-icon" />
        </a>
      </Header>
      <Container bg={Backgrounds[3]}>
        {currentUserExist ? id : "erro"}
      </Container>
    </>
  );
}

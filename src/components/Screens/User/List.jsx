import { Logo, Container, Header, Icon } from "../../UI";
import LogoImg from './../../../assets/img/logo.png'
import TodoImg from '../../../assets/img/to do.jpg'

export default function ScreensUserList() {
  return (
    <>
      <Header>

        <a href="/">

            <Logo src={LogoImg} alt="escola_mais-icon"title="escola mais"/>
            <Icon src={TodoImg} alt="toDo-icon" />
        </a>
      </Header>
      <Container>teste screensuserlist</Container>
    </>
  );
}

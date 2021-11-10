import ScreensUserId from "./User/Id";
import ScreensUserList from "./User/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoImg from "./../../assets/img/logo.png";
import TodoImg from "./../../assets/img/to do.jpg";
import { Header, Icon, Logo } from "../UI";
import Page404Screens from "./Page404";

export default function ScreensRoot() {
  return (
    <>
      <Router>
        <Header>
          <a href="/">
            <Logo src={LogoImg} alt="escola_mais-icon" title="escola mais" />
            <Icon src={TodoImg} alt="toDo-icon" />
          </a>
        </Header>
        <Routes>
          <Route exact path="/" element={<ScreensUserList />} />
          <Route exact path="/user/:id" element={<ScreensUserId />} />
          <Route path="*" element={<Page404Screens/>} />
        </Routes>
      </Router>
    </>
  );
}

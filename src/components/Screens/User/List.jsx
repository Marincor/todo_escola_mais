import UserList from "../../User/List";
import { Backgrounds } from "../../UI/Backgrounds";
import { Container } from "../../UI";
import { useContext } from "react/cjs/react.development";
import { LoadingContext } from "../../../contexts/Loading";
import LoadingAnimation from "../../animations/Loading";

export default function ScreensUserList() {
  const { loading } = useContext(LoadingContext);

  return loading ? (
    <Container>
      <LoadingAnimation />
    </Container>
  ) : (
    <Container bg={Backgrounds[4]}>
      <UserList />
    </Container>
  );
}

import { Container } from "../../UI";
import { Backgrounds } from "../../UI/Backgrounds";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserIdContext } from "../../../contexts/User/id";
import { UserListContext } from "../../../contexts/User/list";
import UserId from "../../User/Id";
import { LoadingContext } from "../../../contexts/Loading";
import LoadingAnimation from "../../animations/Loading";
import ErrorAnimation from "../../animations/Error";

export default function ScreensUserId() {
  const { loading, setLoading } = useContext(LoadingContext);

  const { id } = useParams();

  const { userId, setUserId } = useContext(UserIdContext);

  const { userList } = useContext(UserListContext);

  useEffect(() => {
    // get the id params url //

    setUserId(id);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);


  },[id]);

  // checking if the user exist //

  const currentUserExist = userList.find((user) => user.userId === +userId);

  return loading ? (
    <Container>
      <LoadingAnimation />
    </Container>
  ) : (
    <Container bg={currentUserExist ?Backgrounds[2]: false}>
      {currentUserExist ? <UserId id={id} /> : <ErrorAnimation/>}
    </Container>
  );
}

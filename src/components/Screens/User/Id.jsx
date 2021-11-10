import {  Container} from "../../UI";
import { Backgrounds } from "../../UI/Backgrounds";
import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { UserIdContext } from "../../../contexts/User/id";
import { UserListContext } from "../../../contexts/User/list";
import UserId from "../../User/Id";

export default function ScreensUserId() {
  const { id } = useParams();

  const { userId, setUserId } = useContext(UserIdContext);

  const { userList } = useContext(UserListContext);

  useEffect(() => {
    // get the id params url //

    setUserId(id);
  }, []);


  // checking if the user exist //
  
  const currentUserExist = userList.find((user) => user.userId === +userId);



  return (
   
      <Container bg={Backgrounds[2]}>
        {currentUserExist ? <UserId id={id} /> : "erro"}
      </Container>
  
  );
}

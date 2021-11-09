import { createContext, useEffect, useState } from "react";
import getListUser from "../../services/User/list";

export const UserListContext = createContext();

UserListContext.displayName = "User List";

export const UserListProvider = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {

    // api request //
    try {
      console.log("loading");
      getListUser().then((res) => setUserList(res));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("loading off");
    }
  }, []);

  return <UserListContext.Provider value={{userList, setUserList}}>{props.children}</UserListContext.Provider>;
};

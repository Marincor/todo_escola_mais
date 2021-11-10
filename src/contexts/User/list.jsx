import { createContext, useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import getListUser from "../../services/User/list";
import { LoadingContext } from "../Loading";

export const UserListContext = createContext();

UserListContext.displayName = "User List";

export const UserListProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    // api request //
    try {
      setLoading(true);
      getListUser().then((res) => setUserList(res));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      {props.children}
    </UserListContext.Provider>
  );
};

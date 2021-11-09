import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export const UserIdContext = createContext();

UserIdContext.displayName = "User Id";

export const UserIdProvider = (props) => {
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState()

  

  return (
    <UserIdContext.Provider value={{ userId, setUserId, userInfo, setUserInfo }}>
      {props.children}
    </UserIdContext.Provider>
  );
};

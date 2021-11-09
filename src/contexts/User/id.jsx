import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export const UserIdContext = createContext();

UserIdContext.displayName = "User Id";

export const UserIdProvider = (props) => {
  const [userId, setUserId] = useState();
  const {id} = useParams()

  

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </UserIdContext.Provider>
  );
};

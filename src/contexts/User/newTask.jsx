import { createContext, useEffect, useState } from "react";

export const NewTaskUserContext = createContext();

NewTaskUserContext.displayName = "New Task";

export const NewTaskUserProvider = (props) => {
  const [task, setTask] = useState({
    title: null,
    body: null,
    id: null,
  });

  return (
    <NewTaskUserContext.Provider value={{ task, setTask }}>
      {props.children}
    </NewTaskUserContext.Provider>
  );
};

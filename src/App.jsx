import ScreensRoot from "./components/Screens/Root";
import { UserIdProvider } from "./contexts/User/id";
import { UserListProvider } from "./contexts/User/list";
import { NewTaskUserProvider } from "./contexts/User/newTask";

function App() {
  return (
    <>
      <UserListProvider>
        <UserIdProvider>
          <NewTaskUserProvider>
            <ScreensRoot />
          </NewTaskUserProvider>
        </UserIdProvider>
      </UserListProvider>
    </>
  );
}

export default App;

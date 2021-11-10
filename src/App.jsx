import ScreensRoot from "./components/Screens/Root";
import { LoadingProvider } from "./contexts/Loading";
import { UserIdProvider } from "./contexts/User/id";
import { UserListProvider } from "./contexts/User/list";
import { NewTaskUserProvider } from "./contexts/User/newTask";

function App() {
  return (
    <>
      <LoadingProvider>
        <UserListProvider>
          <UserIdProvider>
            <NewTaskUserProvider>
              <ScreensRoot />
            </NewTaskUserProvider>
          </UserIdProvider>
        </UserListProvider>
      </LoadingProvider>
    </>
  );
}

export default App;

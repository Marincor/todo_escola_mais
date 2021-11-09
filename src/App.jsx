import ScreensRoot from "./components/Screens/Root";
import { UserIdProvider } from "./contexts/User/id";
import { UserListProvider } from "./contexts/User/list";

function App() {
  return (
    <>
      <UserListProvider>
        <UserIdProvider>
          <ScreensRoot />
        </UserIdProvider>
      </UserListProvider>
    </>
  );
}

export default App;

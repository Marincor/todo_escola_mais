import ScreensRoot from "./components/Screens/Root";
import { UserListProvider } from "./contexts/User/list";

function App() {
  return (
    <>
      <UserListProvider>
        <ScreensRoot />
      </UserListProvider>
    </>
  );
}

export default App;

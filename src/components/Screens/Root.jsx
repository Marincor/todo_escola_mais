import ScreensUserId from "./User/Id";
import ScreensUserList from "./User/List";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default function ScreensRoot() {
  
  return (
    <>
      <Router>
            <Routes>
                    <Route exact  path="/" element={ <ScreensUserList/>} />
                    <Route exact path="/user/:id" element={<ScreensUserId/>} />


                
            </Routes>
      </Router>
    </>
  );
}

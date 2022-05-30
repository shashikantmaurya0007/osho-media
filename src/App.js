import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Auth } from "./Pages/Auth/Auth";
import Header from "./layoutcomponent/Header";
import { Login } from "./component/Auth/Login";
import { SignUp } from "./component/Auth/SignUp";
function App() {
  return (
    <div className="App dark  dark:bg-darkBackground">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./Pages/Auth/Auth";
import Header from "./layoutcomponent/Header";
import { Login } from "./component/Auth/Login";
import { SignUp } from "./component/Auth/SignUp";
import { Portal } from "./PortalComponent/Portal";
function App() {
  return (
    <div className="App  min-h-screen dark:bg-darkBackground">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
      <Portal />
    </div>
  );
}

export default App;

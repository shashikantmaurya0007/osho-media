import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth, SideBarLayoutPage, FeedPage } from "./Pages";
import Header from "./layoutcomponent/Header";
import { RequireAuth, Login, SignUp } from "./component/Auth";

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
        <Route element={<RequireAuth />}>
          <Route element={<SideBarLayoutPage />}>
            <Route path="/" element={<FeedPage />}></Route>
          </Route>
        </Route>
      </Routes>
      <Portal />
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Auth,
  SideBarLayoutPage,
  FeedPage,
  BookMarkPage,
  ExplorePage,
  SearchPage,
  UserProfilePage,
} from "./Pages";
import Header from "./layoutcomponent/Header";
import { RequireAuth, Login, SignUp } from "./component/Auth";
import Mockman from "mockman-js";
import { Portal } from "./PortalComponent/Portal";
import { useDocumentTitle } from "./GeneralCustomHook/useDocumentTitle";
import { UserPost } from "./component/UserProfile/UserPost";
import { UserFollowers } from "./component/UserProfile/UserFollowers";
import { UserFollowing } from "./component/UserProfile/UserFollowing";
import { SinglePostPage } from "./Pages/SinglePostPage/SinglePostPage";

function App() {
  useDocumentTitle();
  return (
    <div className="App bg-sky-50 min-h-screen dark:bg-darkBackground">
      <Header />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route element={<SideBarLayoutPage />}>
            <Route index element={<FeedPage />}></Route>
            <Route path="/feed" element={<FeedPage />}></Route>
            <Route path="/bookmarks" element={<BookMarkPage />}></Route>
            <Route path="/explore" element={<ExplorePage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/post/:postId" element={<SinglePostPage />}></Route>
            <Route path="/user/:username" element={<UserProfilePage />}>
              <Route index path="post" element={<UserPost />}></Route>
              <Route index element={<UserPost />}></Route>
              <Route path="followers" element={<UserFollowers />}></Route>
              <Route path="following" element={<UserFollowing />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      <Portal />
    </div>
  );
}

export default App;

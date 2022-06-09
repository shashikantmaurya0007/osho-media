import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "../../GeneralComponent/Loader";
import { UserProfile } from "../../component/UserProfile/UserProfile";
import { useSelector } from "react-redux";
const UserProfilePage = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const allPost = useSelector((state) => state.post.allPost);
  const { followers, following } = useSelector(
    (state) => state.login.userInformation
  );
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {
          data: { user },
        } = await axios.get(`/api/users/${username}`);
        setUserData(user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("failed to load userprofile!");
      }
    })();
  }, [username, followers, following, allPost]);
  return (
    <div>
      {loading && (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!loading && !error && userData && <UserProfile userData={userData} />}
    </div>
  );
};

export { UserProfilePage };

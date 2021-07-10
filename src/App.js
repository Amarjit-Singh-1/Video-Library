import "./styles.css";
import Home from "./Components/Home";
import Liked from "./Components/Liked";
import Playlist from "./Components/Playlist";
import VideoDetail from "./Components/VideoDetail";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PlayListContainer from "./Components/PlayListContainer";
import PrivateRoute from "./PrivateRoute";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { useAuth } from "./auth-context";

export default function App() {
  const { auth } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (auth.username) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [navigate, auth.username]);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <PrivateRoute
            condition={auth.username}
            redirectPath="/signin"
            path="/liked"
            element={<Liked />}
          />
          <PrivateRoute
            condition={auth.username}
            redirectPath="/signin"
            path="/playlist/:playlistName"
            element={<Playlist />}
          />
          <PrivateRoute
            condition={auth.username}
            redirectPath="/signin"
            path="/playlist"
            element={<PlayListContainer />}
          />
          <PrivateRoute
            condition={auth.username}
            redirectPath="/signin"
            path="/video-detail/:videoId"
            element={<VideoDetail />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

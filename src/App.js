import "./styles.css";
import Home from "./Components/Home";
import Liked from "./Components/Liked";
import Playlist from "./Components/Playlist";
import VideoDetail from "./Components/VideoDetail";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/video-detail/:videoId" element={<VideoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation-bar">
      <span className="navigation-bar-logo material-icons">
        video_library<span className="navigation-title"></span>
      </span>
      <nav>
        <ul className="navigation-bar-links">
          <li>
            <Link to="/">Home</Link>
            {/* <div
              title={`${isOnline ? "online" : "offline"}`}
              className={`isOnline ${isOnline ? "lg" : "gy"}`}
            /> */}
          </li>
          <li>
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </nav>
    </div>
    // <nav>
    //   <Link to="/">Home</Link>
    //   {" || "}
    //   <Link to="/liked">Liked</Link>
    // </nav>
  );
}

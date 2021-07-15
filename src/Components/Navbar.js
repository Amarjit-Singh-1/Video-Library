import "../styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export default function Navbar() {
  const { auth, dispatchAuth } = useAuth();
  return (
    <div className="navigation-bar">
      <span className="navigation-bar-logo material-icons">
        video_library<span className="navigation-title"></span>
      </span>
      <nav>
        <ul className="navigation-bar-links">
          <li className="color-white">Welcome {auth?.username || "Guest"}!</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
          {auth.username && (
            <li
              className="color-white"
              onClick={() => dispatchAuth({ type: "LOGOUT_USER", payload: {} })}
            >
              Logout
            </li>
          )}{" "}
        </ul>
      </nav>
    </div>
  );
}

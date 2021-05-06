import "../styles.css";
import { Link } from "react-router-dom";
import { useVideos } from "../video-context";

export default function Home() {
  const { videos, setVideos } = useVideos();
  return (
    <div>
      <h1>This is Home Component</h1>
      <ul className="cards">
        {videos.map((item) => {
          return (
            <>
              <li className="cards-item">
                <Link
                  to={`/video-detail/${item.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <div className="card">
                    <img src={item.image} alt="thumbnail" />
                    {item.title}
                  </div>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

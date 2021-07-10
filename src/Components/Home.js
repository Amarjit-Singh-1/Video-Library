import "../styles.css";
import { Link } from "react-router-dom";
import { useVideos } from "../video-context";

export default function Home() {
  const { videos, setVideos } = useVideos();
  console.log(videos);
  return (
    <div>
      <ul className="cards">
        {videos.map((item) => {
          return (
            <li className="cards-item" key={item._id}>
              <Link
                to={`/video-detail/${item._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="card">
                  <img src={item.image} alt="thumbnail" />
                  <span className="card-text">{item.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

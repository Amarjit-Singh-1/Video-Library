import "../styles.css";
import { useVideos } from "../video-context";
import { Link } from "react-router-dom";

export default function Liked() {
  const { videos, setVideos } = useVideos();
  const length = videos.reduce(
    (len, item) => (item.isLiked ? len + 1 : len),
    0
  );
  function LikedItem({ item }) {
    return (
      <>
        <li className="cards-item">
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
      </>
    );
  }
  return (
    <>
      {length ? (
        <div>
          <h4>Your Liked Videos will show here</h4>
          <ul className="cards">
            {videos.map((item) => {
              if (item.isLiked) {
                return <LikedItem item={item} />;
              } else {
                return undefined;
              }
            })}
          </ul>
        </div>
      ) : (
        <h1>You have no Liked Videos</h1>
      )}
    </>
  );
}

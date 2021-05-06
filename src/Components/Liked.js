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
  }
  return (
    <>
      {length ? (
        <div>
          <h1>This is Liked Component</h1>
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
        <h1>NO LIKED VIDEOS</h1>
      )}
    </>
  );
}

{
  /* <ul className="cards">
        {videos.map((item) => {
          item.isLiked ? (
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
            </>)
          ) : (
            <h1></h1>
        )}
      </ul> */
}
{
  /* <ul className="cards">
        {videos.map((item) => {
          if (item.isLiked) {
            return (
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
            );
          }
        })}
      </ul> */
}

import "../styles.css";
import { Link } from "react-router-dom";
import { usePlaylist } from "../playlist-context";
import { useVideos } from "../video-context";
export default function Playlist() {
  const { videos, setVideos } = useVideos();
  const { playlist, setPlaylist } = usePlaylist();
  function ListItem({ id }) {
    // const video = videos.find((video) => video.id === Number(videoId));
    const item = videos.find((video) => video.id === id);
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
    <div>
      <h1>Something</h1>
      <h2>Playlist Length: {playlist.length}</h2>
      <ul className="cards">
        {playlist.map((id) => {
          // if (videos.includes(id)) {
          //   return <ListItem id={id} />;
          // } else {
          //   return undefined;
          // }
          return <ListItem id={id} />;
        })}
      </ul>
    </div>
  );
}

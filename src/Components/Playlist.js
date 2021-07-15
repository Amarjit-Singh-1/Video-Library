import "../styles.css";
import { Link, useParams } from "react-router-dom";
import { usePlaylist } from "../Contexts/playlist-context";
import { useVideos } from "../Contexts/video-context";
export default function Playlist() {
  const { state, dispatch } = usePlaylist();
  const { playlistName } = useParams();
  return (
    <div>
      <h2>
        {state[playlistName].length} Video
        {state[playlistName].length > 1 ? "s" : ""} in your playlist
      </h2>
      <ul className="cards">
        {state[playlistName].map((id) => {
          return <ListItem id={id} DeleteSvg={DeleteSvg} key={id} />;
        })}
      </ul>
    </div>
  );
}
function ListItem({ id, children, DeleteSvg }) {
  const { videos } = useVideos();
  const { dispatch } = usePlaylist();
  const { playlistName } = useParams();

  const item = videos.find((video) => video._id === id);
  console.log(item);
  const deleteHandler = (name, id) => {
    dispatch({
      type: "DELETE_FROM_PLAYLIST",
      payload: { name: playlistName, id }
    });
    // const res = await deleteFromPlaylist(name, id);
    // console.log(res);
    // if (res.data.success) {
    //   dispatch({
    //     type: "DELETE_FROM_PLAYLIST",
    //     payload: { name: playlistName, id }
    //   });
    // }
  };
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
      <DeleteSvg deleteHandler={deleteHandler} id={item._id} />
    </>
  );
}
function DeleteSvg({ deleteHandler, playlistName, id }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style={{ height: "100%", width: "30px" }}
      onClick={() => deleteHandler(playlistName, id)}
    >
      <g class="style-scope yt-icon">
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
}

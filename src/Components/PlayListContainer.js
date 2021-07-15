import { Link } from "react-router-dom";
import { usePlaylist } from "../Contexts/playlist-context";

function PlayListContainer() {
  const { state, dispatch } = usePlaylist();
  const deleteHandler = (name) => {
    dispatch({ type: "DELETE_PLAYLIST", payload: { name } });
    // const res = await deletePlaylist(name);
    // console.log(res);
    // if (res.data.success) {
    //   dispatch({ type: "DELETE_PLAYLIST", payload: { name } });
    // }
  };
  return (
    <div>
      <h3>All your Playlist are here</h3>
      {Object.keys(state).length ? (
        <ul className="spaced-list">
          {Object.keys(state).map((playlist) => (
            <>
              <Link
                to={"/playlist/" + playlist}
                style={{ textDecoration: "none" }}
              >
                <li className="spaced-list-item" key={playlist}>
                  {playlist}
                </li>
              </Link>
              <DeleteSvg deleteHandler={deleteHandler} playlist={playlist} />
            </>
          ))}
        </ul>
      ) : (
        <h3>You have no Playlists</h3>
      )}
    </div>
  );
}
export default PlayListContainer;

function DeleteSvg({ deleteHandler, playlist }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style={{ height: "100%", width: "30px" }}
      onClick={() => deleteHandler(playlist)}
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

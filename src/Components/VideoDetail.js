import "../styles.css";
import { usePlaylist } from "../Contexts/playlist-context";
import { useVideos } from "../Contexts/video-context";
import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function VideoDetail() {
  const { videos, setVideos } = useVideos();
  const { videoId } = useParams();
  const video = videos.find((video) => video._id === videoId);
  const { state, dispatch } = usePlaylist();
  const [showPL, setShowPL] = useState(false);
  const [name, setName] = useState("");
  const likeVideo = (id) => {
    let temp = videos.map((item) =>
      item._id === id ? { ...item, isLiked: !item.isLiked } : item
    );
    setVideos(temp);
  };
  const playlistOperations = (name, condtn) => {
    if (condtn) {
      dispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: { id: videoId, name }
      });
    } else {
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { id: videoId, name }
      });
      console.log("false");
    }
  };
  const createPlaylist = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch({ type: "CREATE_PLAYLIST", payload: { name } });
    }
    setName("");
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (showPL) {
      inputRef.current.focus();
    }
  }, [showPL]);

  /*
   */
  return (
    <div>
      {showPL && (
        <div id="modal">
          <form onSubmit={createPlaylist} className="modal-content">
            <input
              type="text"
              className="modal-input"
              value={name}
              ref={inputRef}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="modal-btn">
              Create
            </button>
            <ul className="modal-list">
              {Object.keys(state).map((el) => (
                <li className="modal-list-item" key={el}>
                  <Link
                    to={`/playlist/${el}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {el}
                  </Link>
                  <button
                    onClick={() =>
                      playlistOperations(el, state[el].includes(videoId))
                    }
                    className="modal-btn"
                    // style={{ float: "right" }}
                  >
                    {state[el].includes(videoId) ? " Remove" : " Add"}
                  </button>
                </li>
              ))}
            </ul>
            <a href="#" className="close-modal">
              <button onClick={() => setShowPL(false)}>X</button>
            </a>
          </form>
        </div>
      )}
      <iframe
        width="600"
        height="400"
        src={video.url} //cannot read property url of undefined
        title="YTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{video.title}</p>
      <button
        className={video.isLiked ? "icon-btn-red" : "icon-btn"}
        onClick={() => likeVideo(video._id)}
      >
        <span className="material-icons">
          {video.isLiked ? "thumb_up" : "thumb_up_off_alt"}
        </span>
      </button>
      <button className="icon-btn">
        <span className="material-icons" onClick={() => setShowPL(true)}>
          <a href="#modal">playlist_add</a>
        </span>
      </button>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

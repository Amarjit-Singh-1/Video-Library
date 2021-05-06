import "../styles.css";
import { usePlaylist } from "../playlist-context";
import { useVideos } from "../video-context";
import { useParams, Link } from "react-router-dom";

export default function VideoDetail() {
  const { videos, setVideos } = useVideos();
  const { playlist, setPlaylist } = usePlaylist();
  console.log(playlist);
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === Number(videoId));
  // const likeVideo = () => {
  //   let temp = videos.map((video) => {
  //     if (`${video?.id}` === videoId) {
  //       return { ...video, isLiked: !video.isLiked };
  //     }
  //     return videos;
  //   });
  //   setVideos(temp);
  // };
  const likeVideo = (id) => {
    let temp = videos.map((item) =>
      item.id === id ? { ...item, isLiked: !item.isLiked } : item
    );
    setVideos(temp);
  };
  return (
    <div>
      <h1>This is a Video</h1>
      <iframe
        width="600"
        height="400"
        src={video.url}
        title="YTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{video.title}</p>

      <button
        className={video.isLiked ? "icon-btn-red" : "icon-btn"}
        onClick={() => likeVideo(video.id)}
      >
        <span className="material-icons">
          {video.isLiked ? "thumb_up" : "thumb_up_off_alt"}
        </span>
      </button>
      <button className="icon-btn">
        <span
          class="material-icons"
          onClick={() => {
            if (!playlist.includes(video.id)) {
              setPlaylist([...playlist, video.id]);
            }
          }}
        >
          {playlist.includes(video.id) ? "playlist_add_check" : "playlist_add"}
        </span>
      </button>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

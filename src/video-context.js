import { createContext, useContext, useState } from "react";
import { data } from "./videodb";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState(data);
  // const setInitialItems = () => setVideos(videos);
  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideoContext);
}

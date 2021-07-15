import { createContext, useContext, useEffect, useState } from "react";
import { getVideos } from "../apiCalls";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const res = await getVideos();
    console.log(res);
    setVideos(res?.data);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideoContext);
}

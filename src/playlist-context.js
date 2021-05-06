import { createContext, useContext, useState } from "react";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  // const setInitialItems = () => setVideos(videos);
  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}

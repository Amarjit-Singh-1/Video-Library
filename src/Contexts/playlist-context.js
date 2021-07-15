import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../Reducers/playlistReducer";
// import { getPlaylists } from "./apiCalls";

export const PlaylistContext = createContext();
export function PlaylistProvider({ children }) {
  // const [playlist, setPlaylist] = useState([]);
  const [state, dispatch] = useReducer(playlistReducer, {
    playlist1: []
  });
  // const fetchPlaylists = async () => {
  //   const res = await getPlaylists();
  //   console.log(res);
  //   dispatch({ type: "SET_INITIAL", payload: { data: res?.data } });
  // };
  // useEffect(() => {
  //   fetchPlaylists();
  // }, []);
  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}

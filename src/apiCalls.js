import axios from "axios";

const url = "https://VideoLibrary.amarjitsingh2.repl.co";

export const getVideos = async () => {
  const res = await axios.get(`${url}/api/v1/videos`);
  if (res.status === 200) {
    return res;
  }
};

export const getPlaylists = async () => {
  const res = await axios.get(`${url}/playlists`);
  if (res.status === 200) {
    return res;
  }
};

export const createPlaylist = async (name) => {
  const res = await axios.post(`${url}/playlists/${name}`);
  if (res.status === 200) {
    return res;
  }
};

export const addToPlaylist = async (name, id) => {
  const res = await axios.post(`${url}/playlists/${name}/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const deleteFromPlaylist = async (name, id) => {
  const res = await axios.put(`${url}/playlists/${name}/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const deletePlaylist = async (name) => {
  const res = await axios.delete(`${url}/playlists/${name}`);
  if (res.status === 200) {
    return res;
  }
};

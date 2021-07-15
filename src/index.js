import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Contexts/video-context";
import { PlaylistProvider } from "./Contexts/playlist-context";
import { AuthProvider } from "./Contexts/auth-context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <VideoProvider>
        <PlaylistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PlaylistProvider>
      </VideoProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);

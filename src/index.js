import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";
import { AuthProvider } from "./auth-context";

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

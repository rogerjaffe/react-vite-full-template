import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { MIXPANEL_TOKEN } from "./assets/constants";
import mixpanel from "mixpanel-browser";

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init(MIXPANEL_TOKEN, { debug: true });
mixpanel.track("app-loaded");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

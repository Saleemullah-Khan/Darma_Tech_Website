import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Auth0Provider
    domain="dev-hs46ekxlm5yosin4.us.auth0.com"
    clientId="73EEc9VQ7SKvlXcetdFgD9jlScQiHy0b"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <AppProvider>
      <App />
    </AppProvider>
    </Auth0Provider>
,
);

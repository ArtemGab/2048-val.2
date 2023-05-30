import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </React.StrictMode>
);

const devMode = process.env.NODE_ENV === "development";

if (devMode && module && module.hot) {
    module.hot.accept();
}

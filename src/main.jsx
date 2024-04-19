import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "tailwindcss/tailwind.css";
import BackgroundLayout from "./components/BackgroundLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundLayout>
      <App />
    </BackgroundLayout>
  </React.StrictMode>
);

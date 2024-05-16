import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "tailwindcss/tailwind.css";
import BackgroundLayout from "./components/BackgroundLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apply from "./pages/Apply.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apply/:id",
    element: <Apply />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundLayout>
      <RouterProvider router={router} />
    </BackgroundLayout>
  </React.StrictMode>
);

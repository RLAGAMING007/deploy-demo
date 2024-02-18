import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Content } from "./pages/Content.jsx";

const router = createBrowserRouter([
  {
    path: "/deploy-demo/",
    element: <App />,
    children: [
      {
        path: "/deploy-demo/",
        element: <Home />,
      },
      {
        path: "/deploy-demo/content",
        element: <Content />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

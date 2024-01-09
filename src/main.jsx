import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Classes from "./pages/Classes.jsx";
import Servant from "./pages/Servant.jsx";
import Home from "./pages/Home.jsx";
import List from "./components/List.jsx";
import NotFound from "./pages/NotFound.jsx";
import archive from "./data/Archive.json";
import ClassData from "./data/Classes.json";
import Classinfo from "./pages/ClassInfo.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Classes />,
        loader: () => {
          const data = ClassData;
          return data;
        },
      },
      {
        path: "/classes/:id",
        element: <Classinfo />,
        loader: ({ params }) => {
          const { id } = params;
          const data = ClassData.find((e) => e.id == id);
          console.log(data);
          return { data };
        },
      },
      {
        path: "/list",
        element: <List />,
        loader: () => {
          const data = archive;
          return data;
        },
      },
      {
        path: "/servant/:collectionNo",
        element: <Servant />,
        loader: ({ params }) => {
          const { collectionNo } = params;
          const data = archive.find((e) => e.collectionNo == collectionNo);
          return { data };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authenticate from "./authenticate/Authenticate";
import Homepage from "./Homepage";
import Messages from "./pages/Messages";
import VerticalReels from "./pages/Reels/VerticalReels";
import Explore from "./pages/ExplorePost/Explore";
import Profile from "./pages/Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<div>error</div>
  },
  {
    path: "/authenticate",
    element: <Authenticate/>,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path:"/messages",
    element:<Messages/>
  },
  {
    path:"/reels",
    element:<VerticalReels/>
  },
  {
    path:"/explore",
    element:<Explore/>
  },
  {
    path:"/username",
    element:<Profile/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);


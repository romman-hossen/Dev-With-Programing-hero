import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobile from "./Components/Mobile/Mobile.jsx";
import Laptop from "./Components/Laptop/Laptop.jsx";
import User from "./Components/Users/User.jsx";
import User2 from "./Components/Users/User2.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import Post from "./Components/Posts/Post.jsx";

const load = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobile },
      { path: "Laptop", Component: Laptop },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "/users2",
        element: (
          <Suspense
            fallback={<span className="loading loading-dots loading-lg"></span>}
          >
            <User2 load={load}></User2>
          </Suspense>
        ),
      },
      {
        path: "users2/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/posts/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        Component: Post,
      },
    ],
  },
  {
    path: "/about",
    Component: App,
  },
  {
    path: "*",
    element: <h1>404 content is not founded</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);

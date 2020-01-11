import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout } from "./layouts";
import Assignments from "./screens/Assignments";
import Books from "./screens/Books";
import Newspapers from "./screens/Newspapers";
import Pastpapers from "./screens/Pastpapers";
import ItemOverView from "./screens/ItemOverView";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Explorer from "./screens/Explorer/Home"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/explorer-overview" />
  },
  {
    path: "/explorer-overview",
    layout: DefaultLayout,
    component: Explorer
  },
  {
    path: "/assignments",
    layout: DefaultLayout,
    component: Assignments
  },
  {
    path: "/book-store",
    layout: DefaultLayout,
    component: Books
  },
  {
    path: "/news-papers",
    layout: DefaultLayout,
    component: Newspapers
  },
  {
    path: "/past-papers",
    layout: DefaultLayout,
    component: Pastpapers
  },
  {
    path: "/user-store",
    layout: DefaultLayout,
    component: Cart
  },

  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/sign-up",
    layout: DefaultLayout,
    component: SignUp
  }
];

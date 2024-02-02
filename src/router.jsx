import { Link, createBrowserRouter } from "react-router-dom";
import { About, Login, Products, Register } from "./components";
import { HomeLayout } from "./layouts";
import { getCookie } from "./utilities";

export const MainRoute = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <>home</> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/product", element: <Products /> },
      { path: getCookie() ? "/cart" : "", element: <>cart</> },
    ],
  },
  { path: getCookie() ? "" : "/register", element: <Register /> },
  {
    path: "*",
    element: (
      <div className="box-error">
        <div>
          <h1>Error 404 not found </h1>
          <Link to={""}>back to website</Link>
        </div>
      </div>
    ),
  },
]);
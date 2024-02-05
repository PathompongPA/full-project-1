import { Link, createBrowserRouter } from "react-router-dom";
import { About, Login, Products, Register, SimpleLoading } from "./components";
import { HomeLayout, ProductLayout } from "./layouts";
import { getCookie } from "./utilities";

export const MainRoute = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <>home</> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: getCookie() ? "/cart" : "", element: <>cart</> },
    ],
  },
  {
    path: "",
    element: <ProductLayout />,
    children: [{ path: "/products", element: <Products /> }],
  },

  { path: getCookie() ? "" : "/register", element: <Register /> },
  { path: "test", element: <Products /> },
  { path: "loading", element: <SimpleLoading /> },
  { path: "product", element: <Products /> },
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

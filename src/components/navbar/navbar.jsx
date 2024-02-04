import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../utilities";
import "./navbar.css";

export default function Navbar() {
  async function handleOnClickLogout() {
    document.cookie =
      document.cookie + ";" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location = "/";
  }

  useEffect(() => {}, []);

  return (
    <ul className="box-navbar">
      <li className="title-navbar">
        <Link to={""}>Home</Link>
      </li>
      <li className="title-navbar">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="title-navbar">
        <Link to={"/product"}>Product</Link>
      </li>
      {getCookie() ? (
        <>
          <li className="title-navbar">
            <Link to={"/cart"}>cart</Link>
          </li>
          <li className="title-navbar">
            <Link onClick={handleOnClickLogout}>Logout</Link>
          </li>
        </>
      ) : (
        <li className="title-navbar">
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </ul>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../utilities";

export default function Navbar() {
  async function handleOnClickLogout() {
    document.cookie =
      document.cookie + ";" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location = "/";
  }

  useEffect(() => {}, []);

  return (
    <ul className="box-navbar">
      <li>
        <Link to={""}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/product"}>Product</Link>
      </li>
      {getCookie() ? (
        <>
          <li>
            <Link to={"/cart"}>cart</Link>
          </li>
          <li>
            <Link onClick={handleOnClickLogout}>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </ul>
  );
}

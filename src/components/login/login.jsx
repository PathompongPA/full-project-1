import { Link } from "react-router-dom";
import { createElementId } from "../../utilities";
import SimpleLoading from "../simpleLoading/simpleLoading";
import { useEffect } from "react";

export default function Login() {
  function handleOnClickLogin(e) {
    e.preventDefault();
    document.cookie = "token=test;";
    createElementId("body").classList.toggle("disableScroll");
    createElementId("box-simple-loading").classList.toggle("close");
    setTimeout(() => {
      createElementId("box-simple-loading").classList.toggle("close");
      createElementId("body").classList.toggle("disableScroll");
      window.location = "/";
    }, 2000);
  }
  useEffect(() => {
    createElementId("box-simple-loading").classList.toggle("close");
  }, []);
  return (
    <>
      <SimpleLoading />
      <div id="">
        <h1>Login</h1>
        <from>
          <input placeholder="User name"></input>
          <br />
          <input placeholder="Password"></input>
          <br />
          <span>if you don't have account ,</span>
          <br />
          <Link to={"/register"}>register</Link>
          <br />
          <input
            type="button"
            value="Login"
            onClick={handleOnClickLogin}
          ></input>
        </from>
      </div>
    </>
  );
}

import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import { MainRoute } from "./router";
import { RouterProvider } from "react-router-dom";
import { HandleState, initialState } from "./store";
import { getCookie } from "./utilities";

export const Context = createContext({});

export default function App() {
  const [state, dispatch] = useReducer(HandleState, initialState);

  useEffect(() => {
    console.log("cookie : ", getCookie());
    // if (getCookie()) {
    //   dispatch({ type: "toggleIsLogin" });
    // }
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>
      <RouterProvider router={MainRoute}></RouterProvider>;
    </Context.Provider>
  );
}

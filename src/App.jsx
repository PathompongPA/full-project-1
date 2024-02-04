import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { createContext, useEffect, useReducer } from "react";
import { MainRoute } from "./router";
import { RouterProvider } from "react-router-dom";
import { HandleState, initialState } from "./store";
import { getCookie } from "./utilities";
import { SkeletonTheme } from "react-loading-skeleton";

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
    <SkeletonTheme
      baseColor="rgb(235, 235, 235)"
      highlightColor="rgb(245, 245, 245)"
      duration={1}
    >
      <Context.Provider value={[state, dispatch]}>
        <RouterProvider router={MainRoute}></RouterProvider>
      </Context.Provider>
    </SkeletonTheme>
  );
}

import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { useEffect } from "react";

export default function HomeLayout() {
  useEffect(() => {}, []);

  return (
    <div className="box">
      <Navbar />
      <Outlet />
    </div>
  );
}

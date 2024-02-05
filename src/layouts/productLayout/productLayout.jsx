import "./productLayout.css";
import { Outlet } from "react-router-dom";
import { Category, Navbar } from "../../components";

export default function ProductLayout() {
  return (
    <div className="box ">
      <Navbar />
      <div className="box-product-layout"></div>
      <Category />
      <Outlet />
    </div>
  );
}

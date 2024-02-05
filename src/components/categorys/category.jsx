import { useContext, useEffect } from "react";
import "./category.css";
import Skeleton from "react-loading-skeleton";
import { Context } from "../../App";
import { FetchDate } from "../../utilities";
import { Link } from "react-router-dom";

export default function Category() {
  const [state, display] = useContext(Context);
  useEffect(() => {
    console.log("state in category : ", state);
    FetchDate("https://dummyjson.com/products/categories").then((res) => {
      setTimeout(() => {
        display({ type: "setListProductCategory", payload: res });
      }, 1000);
    });
  }, []);

  const listCategory = () => {
    const result = [];

    const template = (data) => {
      return (
        <div className="box-list-category">
          <Link className="list-category" to={"/products/" + data}>
            {data}
          </Link>
        </div>
      );
    };

    if (state.listProductCategory !== undefined) {
      state.listProductCategory.map((prop) => {
        result.push(template(prop));
      });
    } else {
      for (let index = 0; index < 20; index++) {
        console.log(state.listProductCategory);
        result.push(template(<Skeleton />));
      }
    }
    return result;
  };

  return (
    <div className="box">
      <div className="box-category">{listCategory()}</div>
    </div>
  );
}

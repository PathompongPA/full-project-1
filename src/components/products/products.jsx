import "./products.css";
import { useContext, useEffect } from "react";
import { FetchDate, createElementId } from "../../utilities";
import { Context } from "../../App";
import Skeleton from "react-loading-skeleton";
import Category from "../categorys/category";
import { Link } from "react-router-dom";

export default function Products() {
  const [state, dispatch] = useContext(Context);

  const listProduct = state.listProduct;

  useEffect(() => {
    if (state.listProduct === undefined) {
      FetchDate("https://dummyjson.com/products").then((result) => {
        setTimeout(() => {
          dispatch({ type: "setListProduct", payload: result.products });
        }, 1000);
      });
    }
  }, []);

  function cardProduct(
    image = <Skeleton />,
    name = <Skeleton />,
    price = <Skeleton />,
    rating = <Skeleton />
  ) {
    return (
      <Link className="box-card-skeleton box" to={"/product/"}>
        <p>
          {listProduct === undefined ? (
            <Skeleton width={150} height={150} />
          ) : (
            <img
              className="image-product"
              width="150"
              height="150"
              src={image}
              alt={name}
            ></img>
          )}
        </p>
        <p className="contain-product">{name}</p>
        <p>
          <span className="contain-product">{price}</span>
        </p>
        <span className="contain-product">{rating}</span>
      </Link>
    );
  }

  const cardNoData = () => {
    const result = [];
    for (let index = 0; index < 10; index++) {
      console.log("no data : ", index);
      result.push(cardProduct());
      setTimeout(() => {}, 500);
    }
    return result;
  };

  const cardHaveData = () => {
    return listProduct.map((prop) =>
      cardProduct(prop.images[0], prop.title, prop.price, prop.rating)
    );
  };

  return (
    <>
      <div className="box-product">
        {listProduct === undefined ? cardNoData() : cardHaveData()}
      </div>
    </>
  );
}

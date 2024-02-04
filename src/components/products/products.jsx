import "./products.css";
import { useContext, useEffect } from "react";
import { FetchDate, createElementId } from "../../utilities";
import { Context } from "../../App";
import Skeleton from "react-loading-skeleton";
import Category from "../categorys/category";

export default function Products() {
  const [state, dispatch] = useContext(Context);

  const listProduct = state.listProduct;

  useEffect(() => {
    if (state.listProduct === undefined) {
      // createElementId("body").classList.toggle("disableScroll");
      FetchDate("https://dummyjson.com/products").then((result) => {
        setTimeout(() => {
          dispatch({ type: "setListProduct", payload: result.products });
        }, 2000);
        setTimeout(() => {
          // createElementId("box-simple-loading").classList.toggle("close");
          // createElementId("body").classList.toggle("disableScroll");
        }, 1500);
      });
    } else {
      // createElementId("box-simple-loading").classList.toggle("close");
    }
  }, []);

  function cardProduct(
    image = <Skeleton />,
    name = <Skeleton />,
    price = <Skeleton />,
    rating = <Skeleton />
  ) {
    console.log(listProduct);
    return (
      <div className="box-card-skeleton box">
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
      </div>
    );
  }

  const cardNoData = () => {
    const result = [];
    for (let index = 0; index < 18; index++) {
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
      <Category />
      <div className="box-product">
        {listProduct === undefined ? cardNoData() : cardHaveData()}
      </div>
    </>
  );
}

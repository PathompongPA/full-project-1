import { useContext, useEffect } from "react";
import { FetchDate, createElementId } from "../../utilities";
import SimpleLoading from "../simpleLoading/simpleLoading";
import { Context } from "../../App";

export default function Products() {
  const [state, dispatch] = useContext(Context);
  const listProduct = state.listProduct;

  useEffect(() => {
    // console.log(state);
    if (state.listProduct === undefined) {
      createElementId("body").classList.toggle("disableScroll");
      FetchDate("https://dummyjson.com/products").then((result) => {
        dispatch({ type: "setListProduct", payload: result.products });
        setTimeout(() => {
          createElementId("box-simple-loading").classList.toggle("close");
          createElementId("body").classList.toggle("disableScroll");
        }, 1500);
      });
    } else {
      createElementId("box-simple-loading").classList.toggle("close");
    }
  }, []);
  return (
    <>
      <SimpleLoading />
      <div>
        {listProduct &&
          listProduct.map((prop, index) => {
            // console.log("prop : ", prop);
            index = parseInt(index);
            return (
              <div key={index + "box"}>
                <span key={index + prop.title}>{prop.title}</span>
                <span key={index + prop.price}> price : {prop.price}</span>
              </div>
            );
          })}
      </div>
    </>
  );
}

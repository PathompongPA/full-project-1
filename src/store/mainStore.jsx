export default function HandleState(state, action) {
  switch (action.type) {
    case "test":
      return { ...state, home: "test" };
    case "setListProduct":
      return { ...state, listProduct: action.payload };
    case "toggleIsLogin":
      return { ...state, isLogin: false };
    case "setListProductCategory":
      return { ...state, listProductCategory: action.payload };
    default:
      break;
  }
}

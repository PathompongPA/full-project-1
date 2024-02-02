export default function getCookie() {
  console.log("getCookie : ", typeof document.cookie);
  let objCookie = {};
  let newCookie = document.cookie.split("; ");
  let state;
  if (document.cookie === "") {
    state = false;
  } else {
    state = true;
  }
  // console.log(newCookie.length);
  // newCookie.map((prop) => {
  //   const som = prop.split("=");
  //   objCookie[som[0]] = som[1];
  // });
  return state;
}

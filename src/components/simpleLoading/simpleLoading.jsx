import "./simpleLoading.css";
export default function SimpleLoading() {
  return (
    <div id="box-simple-loading" className="loading ">
      <div className="box loading">
        <div>
          <span id="loading" className="animation">
            Loading
          </span>
          <span id="dot-1" className="animation">
            .
          </span>
          <span id="dot-2" className="animation">
            .
          </span>
          <span id="dot-3" className="animation">
            .
          </span>
        </div>
      </div>
    </div>
  );
}

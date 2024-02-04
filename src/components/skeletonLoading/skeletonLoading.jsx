// import "./some.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonLoading() {
  return (
    <div id="box-skeleton">
      <Skeleton width={500} count={10} />
    </div>
  );
}

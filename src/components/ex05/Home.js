import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* <a href="/sub01">서브01 페이지 이동</a>
      <a href="/sub02">서브02 페이지 이동</a> */}

      <Link to={"/sub01"}>서브01 페이지 이동</Link>
      <Link to={"/sub02"}>서브02 페이지 이동</Link>
    </div>
  );
};

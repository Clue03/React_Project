import { Routes, Route, Link } from "react-router-dom";
import GitHub from "./Github";
import Tistory from "./Tistory";
import BaekJoon from "./BaekJoon";

const Others = () => {
  return (
    <div>
      <h1>&nbsp; Others </h1>
      <Link to="github" className="line">&nbsp; GitHub &nbsp;&nbsp;</Link>
      <Link to="tistory" className="line"> Tistory &nbsp;&nbsp;</Link> 
      <Link to="baekjoon" className="line"> BaekJoon </Link> <br /> <hr />
 
     <Routes>
        <Route path="github" Component={GitHub} />
        <Route path="tistory" Component={Tistory} />
        <Route path="baekjoon" Component={BaekJoon} />
      </Routes>
    </div>
  );
};

export default Others;

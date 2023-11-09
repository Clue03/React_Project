import { Routes, Route, Link } from "react-router-dom";
import Goals from "./Goals";
import Values from "./Values";
import Book from "./Book";
import Information from "./Information";

const More = () => {
  return (
    <div>
      <h1>&nbsp; More </h1>
      <Link to="information" className="line_M">&nbsp; Information &nbsp;&nbsp;</Link>
      <Link to="goals" className="line_M"> Goals &nbsp;&nbsp;</Link>
      <Link to="values" className="line_M"> Values &nbsp;&nbsp;</Link> 
      <Link to="book" className="line_M"> Book </Link> <br /> <hr />
 
     <Routes>
        <Route path="information" Component={Information} />
        <Route path="goals" Component={Goals} />
        <Route path="values" Component={Values} />
        <Route path="book" Component={Book} />
      </Routes>
    </div>
  );
};

export default More;

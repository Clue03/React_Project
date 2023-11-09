import { Routes, Route, Link } from "react-router-dom";
import Resume from "./Resume";
import SelfIntro from "./SelfIntro";
import More from "./More";

const Introduction = () => {
  return (
    <div>
      <h1>&nbsp; Introduction </h1>
      <Link to="resume" className="line_intro">&nbsp; Resume &nbsp;&nbsp;</Link>
      <Link to="selfintro" className="line_intro"> SelfIntro &nbsp;&nbsp;</Link>
      <Link to="more" className="line_intro"> More &nbsp;&nbsp;</Link> <br /><hr />
 
     <Routes>
        <Route path="resume" Component={Resume} />
        <Route path="selfintro" Component={SelfIntro} />
        <Route path="more/*" Component={More} />
      </Routes>
    </div>
  );
};

export default Introduction;

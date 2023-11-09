import { Routes, Route, Link } from "react-router-dom";
import Project1 from "./Project1";

const Projects = () => {
  return (
    <div>
      <h1>&nbsp; Projects </h1>
      <Link to="project1" className="line_P">&nbsp; Project1 </Link> <br /> <hr />
 
     <Routes>
        <Route path="project1" Component={Project1} />
        
      </Routes>
    </div>
  );
};

export default Projects;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./comp/Home";
import Projects from "./comp/Projects";
import Introduction from "./comp/Introduction";
import Others from "./comp/Others";
import "./App.css";
import "./comp/css/Others.css";
import "./comp/css/Projects.css";
import "./comp/css/Introduction.css";

const App = () => {
  return (
      <Router>
        <div className="header">
          <Link to="/" className="item"> Home </Link>
          <Link to="/introduction/이세영/개발자" className="item"> Introduction </Link>
          <Link to="/projects" className="item">  Projects </Link>
          <Link to="/others/" className="item"> Others </Link>

        </div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/introduction/:name/:developer/*" Component={Introduction} />
          <Route path="/others/*" Component={Others} />
        </Routes>
      </Router>
  );
};

export default App;

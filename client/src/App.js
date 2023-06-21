
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Project} from "./pages/Project";
function App() {
  return (
    <div className="App">
        <Navbar className="navbar-expand-md navbar-dark bg-dark">
            <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
            <Navbar.Collapse id={"basic-navbar-nav"}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to={"/project"} className="nav-link">Project</Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
        <div className="container flex-row">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />

            </Routes>









    </div>
    </div>

  );
}

export default App;

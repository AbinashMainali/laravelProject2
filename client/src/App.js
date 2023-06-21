import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Project} from "./pages/Project";

function App() {
    return (
        <div className={"App"}>
            <Navbar expand={"md"} bg={"dark"} variant={"dark"} className={"navbar-light"}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/project" className="nav-link">
                                Project
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App-main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Project/>}/>

                </Routes>

            </div>
            <div className={"App-footer"}>
                <Container>
                    <p>© 2021 Abinash Mainali</p>
                </Container>


            </div>

        </div>

    );
}

export default App;

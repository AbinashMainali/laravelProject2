import './App.css';

import {NavLink, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Project} from "./pages/Project";
import {Login} from "./pages/Login";

function App() {
    return (
        <div className={"App "}>
            <Navbar expand={"md"} bg={"dark"} variant={"dark"} className={"navbar-light small"}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/login" className="nav-link">
                                Project
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App-main ">
                {/*Route link to different element */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/project" element={<Project/>}/>

                </Routes>

            </div>
            <div className={"App-footer"}>
                <Container>
                    <p>© 2023 Abinash Mainali</p>

                </Container>


            </div>

        </div>

    );
}

export default App;

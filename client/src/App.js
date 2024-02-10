import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment/moment';
import { Container, Nav, Navbar, } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Project } from "./pages/Project";

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
                            {/* <NavLink to ="/project" className="nav-link">
                                Project
                            </NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="App-main ">
                {/*Route link to different element */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="/project" element={<Project/>}/> */}

                </Routes>

            </div>
            <div className={"App-footer"}>
                <Container>
                    <p>©{moment().format("YYYY")} Abinash Mainali</p>
                </Container>


            </div>

        </div>

    );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="row sticky-nav">
            <div className="col">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-light mx-auto">
                    <div className="container-fluid" style={{ width: "100%" }}>
                        <Link className="navbar-brand title" to="/">
                            <span className="nav-title ms-2 me-4">Ying Xuan</span>
                        </Link>
                        <div 
                            className="d-flex flex-grow-1 justify-content-end"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link active rounded-circle user p-lg-2 p-2"
                                        to="/projects"
                                    >
                                        <p className="mb-0 nav-text data">Projects</p>
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link active rounded-circle user p-lg-2 p-2"
                                        to="/resume"
                                    >
                                        <p className="mb-0 nav-text software">Resume</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr className="m-b-4 mt-0" />
            </div>
        </div>
    );
}

export default Navbar;
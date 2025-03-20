import React from "react";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="row sticky-nav">
            <div className="col">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-light mx-auto">
                    <div className="container-fluid" style={{ width: "100%" }}>
                        <HashLink className="navbar-brand title" to="/#">
                            <span className="nav-title ms-2 me-4">Ying Xuan</span>
                        </HashLink>
                        <div 
                            className="d-flex flex-grow-1 justify-content-end"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <HashLink
                                        className="nav-link active p-lg-2 p-2"
                                        smooth
                                        to="/#projects"
                                    >
                                        <p className="mb-0 nav-text data">Projects</p>
                                    </HashLink>
                                </li>
                                <li className="nav-item me-3">
                                    <HashLink
                                        className="nav-link active p-lg-2 p-2"
                                        smooth
                                        to="/#resume"
                                    >
                                        <p className="mb-0 nav-text software">Resume</p>
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr className="m-b-0 mt-0" />
            </div>
        </div>
    );
}

export default Navbar;
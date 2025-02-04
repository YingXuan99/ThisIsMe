import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="row sticky-nav">
            <div className="col">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-light mx-auto">
                    <div className="container-fluid" style={{ width: '100%' }}>
                        <Link className="navbar-brand title" to="/">
                            <span className="nav-title ms-2 me-4">Ying Xuan</span>
                        </Link>
                        <div className="d-flex flex-grow-1 justify-content-start" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">
                                    <Link className="nav-link active rounded-circle user p-lg-2 p-2" to="/data">
                                        <p className="mb-0 nav-text data">Data Analytics</p>
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link active rounded-circle user p-lg-2 p-2" to="/software">
                                        <p className="mb-0 nav-text software">Software Development</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active rounded-circle user p-lg-2 p-2" to="/volunteer">
                                        <p className="mb-0 nav-text volunteer">Volunteering</p>
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
};

export default Navbar;
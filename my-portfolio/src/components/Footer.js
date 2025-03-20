import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="row footer-container">
            <div className="col">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-light mx-auto">
                    <div className="container-fluid" style={{ width: '100%' }}>
                        <div className="d-flex flex-grow-1 justify-content-end">
                            <small className="text-muted">© {currentYear} All Rights Reserved</small>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Footer;
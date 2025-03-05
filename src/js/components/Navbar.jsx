import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-5" href="#">Natural Disasters</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" aria-current="page" href="#">Earthquake</a>
                        <a className="nav-link text-secondary" href="#">Vulcano</a>
                        <a className="nav-link text-secondary" href="#">Tsunami</a>
                        <a className="nav-link text-secondary" aria-disabled="true">Hurricane</a>
                    </div>
                </div>
            </div>
        </nav>

    );

}


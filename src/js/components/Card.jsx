import React from "react";

export const Card = () => {
    return (
        <div className=" d-flex grid gap-3 pt-3">
            <div className="card">
                <img src="./src/img/earthquake-5124483_1920.jpg" className="card-img-top " alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Earthquake</h5>
                        <p className="card-text">Click here to send you to a page with information about earthquakes</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

            <div className="card">
                <img src="./src/img/marc-szeglat-I1MGVZ42wnU-unsplash.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Vulcano</h5>
                        <p className="card-text">Click here to send you to a page with information about vulcanos</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

            <div className="card">
                <img src="./src/img/matt-paul-catalano-0QEG_xOoY7Y-unsplash.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tsunami</h5>
                        <p className="card-text">Click here to send you to a page with information about tsunamis</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

            <div className="card">
                <img src="./src/img/nasa-i9w4Uy1pU-s-unsplash.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Hurricane</h5>
                        <p className="card-text">Click here to send you to a page with information about hurricanes</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );


}
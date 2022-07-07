import React from 'react';
import { Loader } from 'react-loaders';
import './index.scss';

const Projects = () => {
    return(
        <div className="container portfolio-page">
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/healthcare.png" className="card-top-image" />
                    <h2 className="card-header">Healtcare emr</h2>
                    <br />
                    <a href="https://healthcare-emr.herokuapp.com/base/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/Csgo.png" className="card-top-image" />
                    <h2 className="card-header">Csgo server</h2>
                    <br />
                    <a href="https://csgo-server-app.herokuapp.com/home/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/flexs.png" className="card-top-image" />
                    <h2 className="card-header">Flexs</h2>
                    <br />
                    <a href="https://flexsapp.herokuapp.com/home/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/Oatverse.png" className="card-top-image" />
                    <h2 className="card-header">Oatverse</h2>
                    <br />
                    <a href="https://oatverse.herokuapp.com/acasa/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <br />
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/Construct.png" className="card-top-image" />
                    <h2 className="card-header">Construct</h2>
                    <br />
                    <a href="https://cokopascu-construct.herokuapp.com/acasa/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/maglo.png" className="card-top-image" />
                    <h2 className="card-header">Maglo</h2>
                    <br />
                    <a href="https://magloapp.herokuapp.com/acasa/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <div className="card-portfolio">
                <div className="card-text">
                    <img src="/images/booking.png" className="card-top-image" />
                    <h2 className="card-header">Booking</h2>
                    <br />
                    <a href="https://amdarisapp.herokuapp.com/acasa/" className="card-anchor">Go and visit</a>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Projects;
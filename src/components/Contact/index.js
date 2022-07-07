import React, { useState, useRef } from 'react';
import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
// import {
//     MapContainer,
//     TileLayer,
//     Marker,
//     Popup
//   } from 'https://cdn.esm.sh/react-leaflet'

const Contact = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate');
    const refForm = useRef;

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'razvanalexandru976',
                refForm.current,
                '',
            )
            .then(
                () => {
                    alert("Message succesfully send!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again!")
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            ids={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        Hi, I would be very happy if you would contact me and we could collaborate.
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Razvan Alexandru,
                    <br />
                    Roumania, Caransebes
                    <br />
                    Cazarmii Street 24, 325400
                    <br />
                    <span>razvanalexandru976@gmail.com</span>
                </div>
                <div className="map-wrap">
                    {/* <MapContainer center={[45.414795, 22.212756]} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[45.414795, 22.212756]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;
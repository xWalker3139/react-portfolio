import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to="/">
                <img src="/images/r-remove.png" alt="logo"/>
            </Link>
            <nav>
                <NavLink exact="True" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="True" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="True" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="True" activeclassname="active" to="/projects" className="projects-link">
                    <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" href="https://github.com/xWalker3139" rel='noreferrer'>
                        <FaGithub />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/razvan-alexandru-5861b0227/" rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
import React, { useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Loader } from 'react-loaders';
import { FaReact, FaHtml5, FaCss3, FaPython, FaBootstrap, FaJava } from 'react-icons/fa';

const About = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate');
    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    I would describe myself as being persevering, ambitious person, ready to help you with any problem you may have. I am a Full Stack Web and Mobile Developer, with 3 years experience, using technology like Django, React and React Native.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FaReact />
                        </div>
                        <div className='face2'>
                            <FaHtml5 />
                        </div>
                        <div className='face3'>
                            <FaCss3 />
                        </div>
                        <div className='face4'>
                            <FaPython />
                        </div>
                        <div className='face5'>
                            <FaJava />
                        </div>
                        <div className='face6'>
                            <FaBootstrap />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;
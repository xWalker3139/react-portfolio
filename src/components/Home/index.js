import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { Loader } from 'react-loaders';
import './index.scss';

const Home = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate');
    const nameArray = [' ','R', 'a', 'z', 'v', 'a', 'n', ' ', 'A', 'l', 'e', 'x', 'a', 'n', 'd', 'r', 'u'];
    const jobArray = ['w', 'e', 'b',' ', 'a', 'n', 'd',' ', 'm', 'o', 'b', 'i', 'l', 'e',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        {/* <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="developer"/> */}
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Full Stack Web and Mobile Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;
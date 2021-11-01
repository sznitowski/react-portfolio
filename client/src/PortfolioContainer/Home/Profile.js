import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/valentín-sznitowski/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/sznitowski'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a href='https://www.instagram.com/valentin_sznitowski/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Valentin Sznitowski</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Dev 👋",
                                1000,
                                "Full Stack Developer 💻",
                                1000,
                                "React/Node Js developer ✅",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                           ...
                        </span>
                        </span>
                </div>
            </div>
            </div>
            )
}

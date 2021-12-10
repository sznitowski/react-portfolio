import React from 'react';
import './Profile.scss';

export default function Profile() {
    return (

        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                    <div className='colz-icon'>
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
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Valentin Sznitowski</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                        <h5 class="home__title">Full Stack Developer</h5>
                        <h5 class="home__title">React | NodeJs</h5>

                </div>

                </div> 
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
            </div>
 
            )
}

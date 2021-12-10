import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/logo192.png';
import './header.scss';


export default class Header extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>

        <nav className='text-white' id='navbar'>
          <Link to='main' className='logo'>
            <img src={logo} alt='logo' width="40" />
            <Link to='home' className=''
            >React-Portfolio
            </Link>

          </Link>
          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
          </label>
          <ul className='menu'>
            <li>
              <Link
                to='Home'
                onClick={this.scrollToTop}
                className='btn'>
                Home
              </Link>
            </li>

            <li>
              <Link
                to='Skills'
                className='btn disabled'>
                  
                Skills
              </Link>
            </li>
            <li>

              <Link
                to='#Proyects'
                className='btn disabled'>
                Proyects
              </Link>
            </li>
            <li>
              <Link
                to='Contact'
                className='btn'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

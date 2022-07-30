import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logos/logo.png';

const Header = () => {
    return (
        <div class="navbar bg-primary">
            <div class="navbar-start justify-between lg:justify-start w-full lg:w-1/2">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li tabindex="0">
                            <a>
                                Our Protfolio
                            </a>
                        </li>
                        <li><a>Our Team</a></li>
                        <li><a>Contact Us</a></li>
                        <li className="btn btn-secondary capitalize text-base-100"><a>Login</a></li>
                    </ul>
                </div>
                <a>
                    <img src={logo} alt="logo" width={150} height={47} />
                </a>
            </div>
            <div class="navbar-end hidden lg:flex w-full">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li tabindex="0">
                        <a>
                            Our Protfolio
                        </a>
                    </li>
                    <li><a>Our Team</a></li>
                    <li><a>Contact Us</a></li>
                    <li className="btn btn-secondary capitalize text-base-100"><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
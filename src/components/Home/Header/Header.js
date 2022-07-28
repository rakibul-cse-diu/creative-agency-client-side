import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logos/logo.png';

const Header = () => {
    return (
        // <div class="navbar bg-primary">
        //     <div class="flex-1">
        //         <img src={logo} alt="logo" width={150} height={47} />
        //     </div>
        //     <div class="flex-none">
        //         <ul class="menu menu-horizontal p-0">
        //             <li><a>Home</a></li>
        //             <li tabindex="0">
        //                 <a>
        //                     Our Protfolio
        //                 </a>
        //             </li>
        //             <li><a>Our Team</a></li>
        //             <li><a>Contact Us</a></li>
        //             <li><a>Login</a></li>
        //         </ul>
        //     </div>


        // </div>
        <div class="navbar bg-primary">
            <div class="navbar-start justify-between lg:justify-start w-full lg:w-1/2">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <a>
                    <img src={logo} alt="logo" width={150} height={47} />
                </a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li tabindex="0">
                        <a>
                            Our Protfolio
                        </a>
                    </li>
                    <li><a>Our Team</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
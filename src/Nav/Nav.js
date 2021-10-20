import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navDiv'>
            <ul>
                <li>
                    <a href='/home'>
                         Home
                    </a>
                </li>
                <li>
                    <a href='/about'>
                          About
                    </a>
                </li>
                <li>
                    <a href='/contract'>
                          Contract
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
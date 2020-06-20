import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.svg'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt container" options={{ max:45}} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img className="logo" src={brain} alt="brain"/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;
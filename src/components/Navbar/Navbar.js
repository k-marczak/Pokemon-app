import React from 'react';
import './style.css';
import img from './pikachu.png'

function Navbar() {
    return (
        <>
        <div className="Navbar" class="headTitle">
            Pokemon API
            <img src={img} style={{height: '40px',position: 'relative', top: '10px', left: '5px'}} alt="" />
            
        </div>
        <div>
           
        </div>
        </>

        
        
    
    );
}

export default Navbar;
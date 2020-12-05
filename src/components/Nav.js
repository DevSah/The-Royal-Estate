import React from 'react';
// import '../App.css'
import { Link} from 'react-router-dom'

function Nav() {
    return (
            <nav>
                <h3><Link to='/' style={navStyleLogo}>BC</Link></h3>
                <ul className='nav-links'>
                    <li><Link to='/about' style={navStyle}>About Us</Link></li>
                    {/* <li><Link to='/shop' style={navStyle}>Shop</Link></li> */}
                </ul>
            </nav>
    )
}

export default Nav


const navStyleLogo ={
    color:'aliceblue',
    textDecoration:'none',
    border:'2px solid white',
    borderRadius:'50%',
    padding:'0.5rem',
    margin:'0.2rem'
}

const navStyle ={
    color:'aliceblue',
    textDecoration:'none',
}
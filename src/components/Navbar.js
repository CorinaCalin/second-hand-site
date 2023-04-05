import React from 'react'
import logo from '../images/image.svg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
return(
    <div className='navbox'>
        <div className='leftside'>
            <img src={logo} alt=""/>
        </div>
        <div className='rightside'>
        <Link to='signup' className='navlinks'>Sign UP</Link>
        <Link to='login' className='navlinks'>LOGIN</Link>
    </div>
        </div>
)
}
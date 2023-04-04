import React from 'react'
import logo from '../images/image.svg'

export const Navbar = () => {
return(
    <div className='navbox'>
        <div className='leftside'>
            <img src={logo} alt=""/>
        </div>
        <div className='rightside'></div>
    </div>
)
}
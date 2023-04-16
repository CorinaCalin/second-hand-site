import React, { useContext } from 'react'
import logo from '../images/image.svg'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {cart} from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { auth } from "../config/Config";
import { CartContext } from "../global/CartContext";

export const Navbar = ({user}) => {

    const {totalQty} = useContext(CartContext);
    const history = useHistory();

    const logout = () => {
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }
return(
    <div className='navbox'>
        <div className='leftside'>
            <img src={logo} alt=""/>
        </div>
            
        {
    !user && <div className='rightside'>
        <Link to='signup' className='navlinks'>Sign UP</Link>
        <Link to='login' className='navlinks'>LOGIN</Link>
    </div>
        }
    {
    user && <div className='rightside'>
            <span><Link to="/" className='navlink'>{user}</Link></span>
            <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
            <div className='relative'>
                <span className='number_of_products'>{totalQty}</span>
            </div>
            <span><button className='logout-btn' onClick={logout}>Logout</button></span>
        </div>
    }
    </div>
)
}
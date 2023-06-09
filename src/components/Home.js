import React, {useEffect} from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Products } from './Products'
import { auth, db } from "../config/Config";
import { useHistory } from 'react-router-dom'

export const Home = ({user}) => {

    const history = useHistory();
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(!user){
                history.push('login');
            }
        })
    })

    return(
        <div className='wrapper'>
            <Navbar user={user}/>
            <Products/>
        </div>
    )
}
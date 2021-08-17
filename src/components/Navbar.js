import React from 'react'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'

import {FaShoppingCart} from 'react-icons/fa'
import {IoRocketSharp} from 'react-icons/io5'

const Navbar = () => {
    return (
        <div className="nav">
            <div>
                <Dropdown/>
            </div>
            <div className="rocket">
                <Link to='/'><IoRocketSharp size={50} color="FF0000"/></Link>
            </div>
            <div className="cart">
                <Link to='/cart'><FaShoppingCart size={20}/></Link>
            </div>
                
        
       </div>
    )
}

export default Navbar

import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Shop</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>Contact</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/login'>Log In</Link>
            <img src="" alt="">Logo</img>
            <Link to='/cart'>Cart Image</Link>

        </div>
    )
}

export default Navbar

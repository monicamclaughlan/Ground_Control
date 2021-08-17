import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoRocketSharp} from 'react-icons/io5'

const Footer = () => {
    return (
        <footer>
            <Link to='/'><IoRocketSharp size={40} color="#FF0000"/></Link>
            <div className="footer-icons">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={30}/></a>
                <a href="https://www.instgram.com" target="_blank" rel="noreferrer"><FiInstagram size={30}/></a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF size={30}/></a>
            </div>
            <p>Farmington, MI</p>
            <p>Copyright 2021</p>
        </footer>
    )
}

export default Footer

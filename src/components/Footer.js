import React from 'react'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
        <div>
            <h2>Ground Control</h2>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://www.instgram.com" target="_blank" rel="noreferrer"><FiInstagram/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            <p>Farmington, MI</p>
            <p>Copyright 2021</p>
        </div>
    )
}

export default Footer

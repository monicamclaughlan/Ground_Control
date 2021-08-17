import React, {useState, useRef, useEffect} from 'react'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'

//dropdown menu component derived from: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks


const Dropdown = () => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    useEffect(() => { 
        const pageClickEvent = (e) => {
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)){ 
                setIsActive(!isActive)
            }
        }
        if (isActive) { 
            window.addEventListener('click', pageClickEvent)
        }
        return () => { 
            window.removeEventListener('click', pageClickEvent)
        }
    }, [isActive])

    return (
        <div className='menu-container'>
            <button onClick={onClick} className='menu-trigger'>
                <FiMenu size={20} color="white"/>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to='/menu'>Order</Link></li>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>Contact</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Dropdown

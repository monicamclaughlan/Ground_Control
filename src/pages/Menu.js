import React, { useEffect, useState } from 'react'
import items from '../menu_dummy'

const Menu = ({menu, setMenu, addToCart}) => {

    // const [isActive, setActive] = useState("false")

    useEffect(() => { 
        setMenu(items)
    }, [])

    // const handleToggle = (id) => 
    // { 
    //     setActive(!isActive)
    // }


    const menuItems = menu.map((m, i) => { 
        return ( 
            <div className="item-image" >
                <div className="item">
                    <h3>{m.title}</h3>
                    <p>{m.size}</p>
                    <p>{m.description}</p>
                    <h4>{m.price}</h4>
                </div>
                <div> 
                    <button onClick={() =>{
                        addToCart(i)
                        // handleToggle(m.id)
                    }}>
                        Add To Cart</button>
                </div>
                <div className='image'>
                    <img src={m.img} alt="coffee"></img>
                </div>
                
            </div>
        )

    })

    return (
        <div className="menu-items">
            {menuItems}
        </div>
    )
}

export default Menu

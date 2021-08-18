import React, { useEffect } from 'react'
import items from '../menu_dummy'

const Menu = ({menu, setMenu}) => {

    useEffect(() => { 
        setMenu(items)
    }, [])

    const menuItems = menu.map((m, i) => { 
        return ( 
            <>
            <div className="item">
                <h3>{m.title}</h3>
                <p>{m.size}</p>
                <p>{m.description}</p>
                <h4>{m.price}</h4>
            </div>
            <div>
                <img src={m.img} alt="coffee"></img>
            </div>
            </>
        )

    })

    return (
        <div className="menu-items">
            {menuItems}
        </div>
    )
}

export default Menu

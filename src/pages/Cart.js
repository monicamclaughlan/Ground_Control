import React from 'react'
import items from '../menu_dummy'

const Cart = ({cart, remove}) => {

    console.log(cart)



    const getItems = cart.map((c, index) => { 
        let item = items[c]
        return ( 
            <>
            <div>
                <img width="160px" height="150px" src={item.img} alt="espresso"></img>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
            <button onClick={() => remove(index)}>Remove from Cart</button>
            </>
        )
    }) 

    



    return (
        <div>
            {getItems}
        </div>
          
        
    )
}

export default Cart

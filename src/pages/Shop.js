import React, { useEffect } from 'react'
import store from  '../store_dummy'
import Product from '../components/Product'
import {Link} from 'react-router-dom'

const Shop = ({products, setProducts, setSelectedProduct, history}) => {

useEffect(() => { 
    setProducts(store)
}, [])    

// const onClick = (p) => {
//     console.log(p)
//     return(
//         <Product p={p}/>
//     )  
// }

let productList = products.map((p, i) => { 
    return ( 
        <div key={i} className="product-item"> 
            <img onClick={() => {
                setSelectedProduct(p)
                history.push(`./product/${p.id}`)
                }} 
                src={p.img} alt="coffee" height='300px' width='300px'></img>
            {/* <Link to={`/product/${p.id}`}>
                <img src={p.img} alt="coffee" height='300px' width='300px'></img>
            </Link> */}
            <h3>{p.title}</h3>
        </div>
    )
})

    return (
        <div className="all-products">
            {productList}
        </div>
    )
}

export default Shop

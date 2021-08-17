import React from 'react'

const Product = ({product}) => {
    console.log({product})
   

    return (
        <div className="select-product">
            <img src={product.img} height="300px" width="300px"></img>
            <h1>{product.title}</h1>
            <div className="details">
                <div>
                    <h2>{product.weight[0]}</h2>
                    <h2>{product.price[0]}</h2>
                </div>
               <div>
                    <h2>{product.weight[1]}</h2>
                    <h2>{product.price[1]}</h2>
               </div>
                
            </div>
          
            <h3>{product.notes}</h3>
            <h4>{product.type}</h4>
            
        </div>
    )
}

export default Product

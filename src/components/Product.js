import React, {useEffect} from 'react'
import store from '../store_dummy'

const Product = (props) => {
    const id = props.match.params.id
    let s = store.filter(i => i.id === Number(id))
    console.log(s)


    return (
        <div className="select-product">
            <img src={s[0].img} height="500px" width="500px" alt="coffee-bag"></img>
            <h1>{s[0].title}</h1>
            <div className='details'>
                <div className="costs">
                    <h2>{s[0].weight[0]}</h2>
                    <h2>{s[0].price[0]}</h2>
                </div>
                <div className="costs">
                    <h2>{s[0].weight[1]}</h2>
                    <h2>{s[0].price[1]}</h2>
                </div>
            </div>
            <h4>{s[0].notes}</h4>
            <h4>{s[0].type}</h4>
            
            {/* <img src={product.img} height="300px" width="300px"></img>
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
            <h4>{product.type}</h4> */}
            
        </div>
    )
}

export default Product

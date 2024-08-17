import React, { useContext } from 'react'
import { ShoppingCartContext } from '../Context/ShoppingCartContext'

const ProductCard = (props) => {
    const itemData = props.itemData
    const { cart, addToCart, removeFromCart, updateQuantity, getTotal } = useContext(ShoppingCartContext)

    console.log(cart);
    

  return (
    <div style={{maxHeight:"800px",margin:"5px",padding:"10px"}} >
        <img width={200} height={200} alt={itemData.title} src={itemData.image} />
        <h1 style={{width:"250px",fontSize:"22px",overflow:"none"}} >{itemData.title}</h1>
        <p>Price {itemData.price}</p>
        <button>Add</button>
    </div>
  )
}

export default ProductCard
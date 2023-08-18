import React from 'react'
import "./Cart.scss"
import { Link } from 'react-router-dom'
const Cart = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className='cart'>
        <div className='images'>
            {item.isNew && <span>New Season</span> }
            <img src={`/${item.img}`} className='MainImage'/>
            <img src={`/${item.img2}`} className='SecondImage'/>
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
        <h3>${item.OldPrice}</h3>
        <h3>${item.price}</h3>
        </div>
    </div>
    </Link> 
  )
}

export default Cart
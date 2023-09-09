import React from 'react'
import "./Cart.scss"
import { Link } from 'react-router-dom'
const Cart = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className='cart'>
        <div className='images'>
            {item?.attributes.isNew && <span>New Season</span> }
            <img src={`${process.env.REACT_APP_UPLOAD_URL+item?.attributes.img.data.attributes.url}`} className='MainImage'/>
            <img src={`${process.env.REACT_APP_UPLOAD_URL+item?.attributes.img2.data.attributes.url}`} className='SecondImage'/>
        </div>
        <h2>{item?.attributes.Title}</h2>
        <div className='prices'>
        <h3>${item.OldPrice || item?.attributes.Price +20}</h3>
        <h3>${item?.attributes.Price}</h3>
        </div>
    </div>
    </Link> 
  )
}

export default Cart
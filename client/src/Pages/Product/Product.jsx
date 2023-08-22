import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import "./Product.scss"
const Product = () => {
  const images=['/img/w1.jpg','/img/w2.jpg']
  const[selectedImage,setselectedImage]=useState(0)
  const [Quantity,setQuantity]=useState(0)
  return (
    <div className='product'>
      <div className="left">
        <div className='images'>
          <img src={images[0]} alt='single Image' onClick={e=>setselectedImage(0)}/>
          <img src={images[1]} alt='single Image' onClick={e=>setselectedImage(1)}/>
        </div>
        <div className='MainImageWrapper'>
          <img className='MainImage' src={images[selectedImage]} />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis sit, eligendi repudiandae iure velit quo explicabo minus vero ad alias hic eum laborum. Nisi sint possimus molestiae itaque fugit.</p>

        <div className='quantity'>
          <button onClick={()=>setQuantity((prev)=>prev-1)}>-</button>
          {Quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <ShoppingCartIcon/> ADD TO CART
        </button>
        <div className='link'>
          <div className="item">
            <FavoriteBorderOutlinedIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <CompareArrowsIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vendor:polo</span>
          <span>Product-Type:T-Shirt</span>
          <span>Tag:T-shirt Women top</span>
        </div>

        <div className='details'>
          <span>Description</span>
          <hr/>
          <span>Additional Information</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
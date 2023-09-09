import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import {useDispatch} from "react-redux"
import AddToCart from '../../Component/AddToCart/AddToCart';
import "./Product.scss"

const Product = () => {
  const dispatch=useDispatch()
  const[selectedImage,setselectedImage]=useState("img")
  const [Quantity,setQuantity]=useState(0)
  const {id}=useParams()


  const {data,error,loding}=useFetch(`/products/${id}?populate=*`)
  return (
    <div className='product'>
      <div className="left">
        <div className='images'>
          <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt='single Image' onClick={e=>setselectedImage("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt='single Image' onClick={e=>setselectedImage("img2")}/>
        </div>
        <div className='MainImageWrapper'>
          <img className='MainImage' src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImage].data?.attributes?.url} />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.Title}</h1>
        <span className='price'>${data?.attributes?.Price}</span>
        <p>{data?.attributes?.desc}</p>

        <div className='quantity'>
          <button onClick={()=>setQuantity((prev)=>prev-1)}>-</button>
          {Quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add' onClick={()=>dispatch(AddToCart({
          id:data?.id,
          title:data?.attributes?.Title,
          desc:data?.attributes?.desc,
          img:data?.attributes?.img?.data?.attributes?.url,
          price:data?.attributes?.Price,
          Quantity,
        }))}>
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
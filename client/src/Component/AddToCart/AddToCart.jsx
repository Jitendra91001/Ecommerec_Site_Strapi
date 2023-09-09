import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './AddToCart.scss'
import {useSelector} from "react-redux";
const AddToCart = () => {
    const products=useSelector(state=>state.cart.products)
    // let  products=[
    //     {
    //         id:1,
    //         img:'/img/w2.jpg',
    //         img2:'/img/w8.jpg',
    //         title:"T-Shirt for Men",
    //         desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio earum placeat ducimus nostrum laborum labore omnis assumenda nihil accusantium!",
    //         isNew:true,
    //         OldPrice:45,
    //         price:25
    //     },
    //     {
    //         id:2,
    //         img:'/img/w3.jpg',
    //         img2:'/img/w5.jpg',
    //         desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio earum placeat ducimus nostrum laborum labore omnis assumenda nihil accusantium!",
    //         title:"Coat",
    //         isNew:true,
    //         OldPrice:45,
    //         price:25
    //     }
    // ]
  return (
    <div className='addtocart'>
        <h1>Products in your carts</h1>
        {products?.map((item)=>(
            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt='add to cart'/>
                <div className='details'>
                   <h1>{item.title}</h1>
                   <p>{item.desc.substring(0,100)}</p>
                   <div className='price'>1 X ${item.price}</div>
                </div>
                <DeleteIcon className='delete'/>
            </div>
        ))}
      
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>reset cart</span>
    </div>
  )
}
export default AddToCart
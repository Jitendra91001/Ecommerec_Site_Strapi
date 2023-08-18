import React from 'react'
import "./FeaturedProducts.scss"
import Cart from '../Cart/Cart'
const FeaturedProducts = ({type}) => {
  let  products=[
        {
            id:1,
            img:"t1.avif",
            img2:"t2.avif",
            title:"T-Shirt for Men",
            isNew:true,
            OldPrice:45,
            price:25
        },
        {
            id:2,
            img:"t3.avif",
            img2:"t2.avif",
            title:"Coat",
            isNew:true,
            OldPrice:45,
            price:25
        },
        {
            id:3,
            img:"t4.avif",
            img2:"t2.avif",
            title:"Coat",
            isNew:false,
            OldPrice:45,
            price:25
        },
        {
            id:4,
            img:"t5.avif",
            img2:"t2.avif",
            title:"Coat",
            isNew:false,
            OldPrice:45,
            price:25
        }
    ]
  return (
    <div className='FeaturedProducts'>
        <div className='top'>
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur tempora nisi. Esse ad illum voluptates facere nobis, impedit dolorum fugit rerum soluta, sequi veniam deleniti nisi vitae iusto dignissimos.</p>
        </div>
        <div className='bottom'>
            {products.map((item)=>(
                <Cart item={item} key={item.id}/>
            ))}
        </div>

    </div>
  )
}

export default FeaturedProducts
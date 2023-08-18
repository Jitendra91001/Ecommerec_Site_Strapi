import React from 'react'
import "./List.scss"
import Cart from '../Cart/Cart'
const List = () => {
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
    <div className='list'>
     {products.map((item)=>(
        <Cart item={item} key={item.id}/>
     ))}
    </div>
  )
}

export default List
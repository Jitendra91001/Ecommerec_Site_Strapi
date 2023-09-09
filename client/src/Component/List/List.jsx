import React from 'react'
import "./List.scss"
import Cart from '../Cart/Cart'
import useFetch from '../../Hooks/useFetch'
const List = ({subCats,sort,maxprice,cartId}) => {
    // let  products=[
    //     {
    //         id:1,
    //         img:"t1.avif",
    //         img2:"t2.avif",
    //         title:"T-Shirt for Men",
    //         isNew:true,
    //         OldPrice:45,
    //         price:25
    //     },
    //     {
    //         id:2,
    //         img:"t3.avif",
    //         img2:"t2.avif",
    //         title:"Coat",
    //         isNew:true,
    //         OldPrice:45,
    //         price:25
    //     },
    //     {
    //         id:3,
    //         img:"t4.avif",
    //         img2:"t2.avif",
    //         title:"Coat",
    //         isNew:false,
    //         OldPrice:45,
    //         price:25
    //     },
    //     {
    //         id:4,
    //         img:"t5.avif",
    //         img2:"t2.avif",
    //         title:"Coat",
    //         isNew:false,
    //         OldPrice:45,
    //         price:25
    //     }
    // ]
    const {data,error,loding}=useFetch(`/products?populate=*&[filters][sub-categories][id]=${cartId}${subCats.map(item=>`&[filters][categories][id][$eq]=${item}`)}&[filters][Price][$lte]=${maxprice}&sort=Price:${sort}`)
  return (
    <div className='list'>
     {loding ? "loding" : data?.map((item)=>(
        <Cart item={item} key={item.id}/>
     ))}
    </div>
  )
}

export default List
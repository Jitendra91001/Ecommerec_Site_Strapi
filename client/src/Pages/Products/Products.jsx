import React, { memo, useState } from 'react'
import List from '../../Component/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import "./Products.scss"

const Products = () => {
  const {cartId}=parseInt(useParams())
  const [maxPrice,setMaxPrise]=useState(1000)
  const[sort,setSort]=useState('asc')
  const[subCategories,setSubcategories]=useState([])

  const {data,error,loding}=useFetch(`sub-categories?[filters][sub-categories][id][$eq]=${cartId}`)
  
  const handleChange=(e)=>{
      const value=e.target.value;
      const isChecked=e.target.checked;
      
      setSubcategories(isChecked ? [...subCategories,value] : subCategories.filter(item=>item !== value))
  }

  console.log(subCategories)
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {
            data && data.map(item=>(
              <div className='inputItem' key={item.id}>
            <input type="checkbox" value={item.id} id={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item?.attributes.Title}</label>
          </div>
            ))
          }
          {/* <div className='inputItem'>
            <input type="checkbox" value={2} id='2'/>
            <label htmlFor='2'>Skart</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" value={3} id='3'/>
            <label htmlFor='3'>cort</label>
          </div> */}
        </div>
        <div className='filterItem'>
        <h2>filter by prices</h2>
        <div className='inputItem'>
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrise(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>

        </div>
        <div className='filterItem'>
        <h2>Sort By</h2>
        <div className='inputItem'>
          <input type="radio" id='asc' name='price' value='asc' onChange={()=>setSort('asc')}/>
          <label htmlFor='asc'>Price (Lawest First)</label>
        </div>

        <div className='inputItem'>
          <input type="radio" id='desc' name='price' value='desc' onChange={()=>setSort('desc')}/>
          <label htmlFor='dasc'>Price (Hightst First)</label>
        </div>

        </div>
      </div>
      <div className='right'>
        <img src='/img/w3.jpg' className='catImg'/> 
        <List sort={sort} maxprice={maxPrice} cartId={cartId} subCats={subCategories}/>
      </div>
    </div>
  )
}

export default memo(Products)
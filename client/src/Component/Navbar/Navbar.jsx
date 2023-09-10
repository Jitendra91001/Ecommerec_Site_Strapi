import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import AddToCart from '../AddToCart/AddToCart';
import { useDispatch,useSelector } from 'react-redux';
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const products=useSelector(state=>state.cart.products)
    return (
        <div className='navbar'>
            <div className='warpper'>
                <div className='left'>
                    <div className='item'>
                        <span>INDIA</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <span>UID</span>
                        <KeyboardArrowDownIcon />
                    </div>

                    <div className='item'>
                        <Link className="link" to='/Products/1'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to='/Products/2'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to='/Products/3'>Chilendren</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className="link" to="/">Ecommerec-Site</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">HomePage</Link>
                    </div>

                    <div className='item'>
                        <Link className="link" to="/">Contact</Link>
                    </div>

                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div>

                    <div className='item'>
                        <Link className="link" to="/">Stores</Link>
                    </div>

                    <div className='icons'>
                        <SearchIcon />
                        <AccountCircleIcon />
                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className='carticons' onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon />
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
            {open && <AddToCart/>}
        </div>
    )
}

export default Navbar
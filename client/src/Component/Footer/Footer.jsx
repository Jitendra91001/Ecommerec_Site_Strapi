import React from 'react'
import "./Footer.scss"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='items'>
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivales</span>
                </div>
                <div className='items'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>

                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='items'>
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit nesciunt quidem ea quo voluptas mollitia itaque voluptatum voluptates, reprehenderit rerum veniam culpa quod eveniet. .</span>
                </div>
                <div className='items'>
                <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit nesciunt quidem ea quo voluptas mollitia itaque voluptatum voluptates, reprehenderit rerum veniam culpa quod eveniet. </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='logo'>Jitendra</div>
                    <div className='copyright'>&copy; Copyright 2023. All Right Rewards</div>
                </div>
                <div className='right'>
                    <div className='logoImage'>
                        <img src="/payment.png" alt="Payment Image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <div className='Categories'>
            <div className='col'>
                <div className='row'>
                    <img src='/img/w3.jpg' alt='' />
                    <button className='link'>
                        <Link to="products/1">
                            Men
                        </Link>
                    </button>
                </div>
                <div className='row'>
                    <img src='/img/w4.jpg' alt='' />
                    <button>
                        <Link to="products/2">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src='/img/w6.jpg' alt='' />
                    <button>
                        <Link to="products/3">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src='/img/w8.jpg' alt='' />
                            <button>
                                <Link to="products/4">
                                    Clothes
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src='/img/w9.jpg' alt='' />
                            <button>
                                <Link to="products/5">
                                    Men
                                </Link>
                            </button>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <img src='/img/p3.jpg' alt='' />
                    <button>
                        <Link to="products/6">
                            Men
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
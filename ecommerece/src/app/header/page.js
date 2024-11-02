import React from "react"
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './header.css'




const Header = () => {
    return (
        <>
        <div className='header' >
            <div className='top_header'>
                <div className='logo'>
                    <img src='images/logo.svg' width={100} height={100} /> 
                </div>
                <div className='search_box'>
                    <div className='search_bar'>
                        <input type='text' placeholder='Search for products' />
                        <button>
                            <IoSearch />
                        </button>
                    </div>
                </div>
                <div className='function_link'>
                    <div className='user'>
                        <div className='icon'>
                            <FaRegUser />
                        </div>
                    </div>
                    <div className='cart'>
                        <div className='icon'>
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
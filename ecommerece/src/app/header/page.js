import React from "react"

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
                    <button>Search</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header
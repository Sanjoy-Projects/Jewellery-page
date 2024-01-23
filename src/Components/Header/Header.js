import React, { useState } from 'react'
import './Header.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className=' w-[100%] py-4 text-white navber px-10 flex '>
                <div className='logo'>
                    <span>
                        <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellary-logo.png" className="bannerLogo"alt='Error'></img>
                    </span>
                </div>
                <div className={showMediaIcons ? "nav-items mobile-nav-items" : "nav-items"}>
                    <ul className='unorderedListItems'>
                        <NavLink to='/' className="NavLinks ">Home</NavLink>
                        <NavLink to='/Shop' className="NavLinks">Shop</NavLink>
                        <NavLink to='/jwellery' className="NavLinks">Jewellery</NavLink>
                        <NavLink to='/About' className="NavLinks">About</NavLink>
                        <NavLink to='/Blog' className="NavLinks">Blog</NavLink>
                        <NavLink to='/Return' className="NavLinks">Return</NavLink>
                    </ul>
                </div>
                <div className='bagIcon flex '>
                    <div className='relative bagIcon-Section'>
                    <h1 className='absolute right-0 bottom-4 text-[17px]'>0</h1>
                    <span><ShoppingBagOutlinedIcon/></span>
                    </div>
                   <div>
                   <span className='hamburger-menu ml-10' onClick={() => setShowMediaIcons(!showMediaIcons)}><MenuOutlinedIcon /></span>
                   </div>

                </div>
            </div>
        </>
    )
}

export default Header;
import React from "react";
import './Bracelet.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link, NavLink, useLocation } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';

function Bracelet() {
    const location = useLocation();
    return (
        <>
            <section className="main-section py-4 px-[14px]">
            <nav>
                    <Link to="/"
                        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active links"}
                    >
                        Home
                    </Link>
                    <IconButton size="small">
                        <ArrowForwardIosOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Link to="/Shop"
                        className={location.pathname.startsWith("/Shop") ? "breadcrumb-active" : "breadcrumb-not-active links"}
                    >
                        Shop
                    </Link>
                    <IconButton size="small">
                        <ArrowForwardIosOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Link to="/Bracelet"
                        className={location.pathname === "/Necklace" ? "breadcrumb-active" : "breadcrumb-not-active "}
                    >
                        Bracelet
                    </Link>
                </nav>
                <div className="container heading-main-bracelet w-[70%]">
                    <div className=" header">
                        <h1 className="">Bracelet</h1>
                    </div>
                    <div className="dropdown flex justify-between py-4">
                        <div>
                            <h1>Show all 2 results</h1>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-button text-start dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Default sorting
                            </button>
                            <ul className="dropdown-menu">

                                <li><a className="dropdown-item" href="#">Sort by popularity</a></li>
                                <li><a className="dropdown-item" href="#">Sort by average rating</a></li>
                                <li><a className="dropdown-item" href="#">Sort by latest</a></li>
                                <li><a className="dropdown-item" href="#">Sort by price: low to high</a></li>
                                <li><a className="dropdown-item" href="#">Sort by price: high to low</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="Shop-your-favourite-bracelet">      
                        <div className="bracelet-images relative ">
                       <NavLink to="/BraceletDiscount" className="absolute bracelet-sale-button right-[35px]"> <span><button>Sale!</button></span></NavLink>
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/gold-bracelet.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Stunning Gold Bracelet</h1>
                            <span className="font-semibold text-[20px]">$9.25</span>
                            <div>
                                <button type="button" className="btn ">Add to cart</button>
                            </div>
                        </div>
                        <div className="bracelet-images">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/modern-bracelet-450x450.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Elegant Modern Bracelet</h1>
                            <span className="font-semibold text-[20px]">$15.00</span>
                            <div>
                                <button type="button" className="btn ">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Bracelet;
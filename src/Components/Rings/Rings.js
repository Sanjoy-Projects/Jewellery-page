import React from "react";
import './Rings.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link, useLocation } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';

function Rings() {
    const location = useLocation();
    return (
        <>
            <section className="main-section py-4 px-[14px]">
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
                    <Link to="/Rings"
                        className={location.pathname === "/Rings" ? "breadcrumb-active" : "breadcrumb-not-active "}
                    >
                        Rings
                    </Link>
                <div className="container heading-main-rings w-[70%]">
                    <div className=" header">
                        <h1 className="">Rings</h1>
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

                    <div className="Shop-your-favourite-rings">
                    <div className="rings-images">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product5.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Pearl Beauty Ring</h1>
                            <span className="font-semibold text-[20px]">$14.02</span>
                            <div>
                                <button type="button" className="btn ">Add to cart</button>
                            </div>
                        </div>
                        <div className="rings-images">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product1.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Purple Stone Ring</h1>
                            <span className="font-semibold text-[20px]">$10.15</span>
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

export default Rings;
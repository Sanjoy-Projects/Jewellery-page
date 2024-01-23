import React from "react";
import './Earrings.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';

function Earrings() {
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
                    <Link to="/Earrings"
                        className={location.pathname === "/Earrings" ? "breadcrumb-active" : "breadcrumb-not-active "}
                    >
                        Earrings
                    </Link>
                </nav>
                <div className="container heading-main-Earrings w-[70%]">
                    <div className=" header">
                        <h1 className="">Earrings</h1>
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

                    <div className="Shop-your-favourite-Earrings">
                    <div className="Earrings-images relative">
                    <NavLink to="/EarringsDiscount" className="absolute Earrings-sale-button right-[35px]"><span><button>Sale!</button></span></NavLink>
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Infinity Solitaire Studs</h1>
                            <span className="font-semibold text-[20px]">$6.07</span>
                            <div>
                                <button type="button" className="btn ">Add to cart</button>
                            </div>
                        </div>
                        <div className="Earrings-images">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product4.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Ocean Drops Earring</h1>
                            <span className="font-semibold text-[20px]">$13.00</span>
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

export default Earrings;
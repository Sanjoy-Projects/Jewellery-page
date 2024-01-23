import React from "react";
import './Necklace.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';

function Necklace() {
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
                    <Link to="/Necklace"
                        className={location.pathname === "/Necklace" ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        Necklace
                    </Link>
                </nav>
                <div className="container heading-main-necklace w-[70%]">
                    <div className=" header">
                        <h1 className="">Necklace</h1>
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

                    <div className="Shop-your-favourite-necklace">
                        <div className="necklace-images relative">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/Jewellery-product8.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Emerald Diamond Locket</h1>
                            <span className="font-semibold text-[20px]">$12.25</span>
                            <div>
                                <button type="button" className="btn ">Add to cart</button>
                            </div>
                        </div>
                        <div className="necklace-images relative">
                            <NavLink to="/NecklaceDiscount" className="absolute necklace-sale-button right-[35px]"><span><button>Sale!</button></span></NavLink>
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product3.jpg" className="w-[200px]" alt="..." />
                            <h1 className="text-[17px] mt-2">Valentine locket</h1>
                            <span className="font-semibold text-[20px]">$8.00</span>
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

export default Necklace;
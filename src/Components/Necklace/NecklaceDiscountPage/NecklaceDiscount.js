import React from "react";
import './NecklaceDiscount.css'
import { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';
function NecklaceDiscount() {
    const location = useLocation();
    const [count, setCount] = useState(0);
    return (
        <>
            <section className="Necklace-Section py-3 px-[20px]">
            <nav className="pl-[10px]">
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
                        className={location.pathname === "/Necklace" ? "breadcrumb-active" : "breadcrumb-not-active links"}
                    >
                        Necklace
                    </Link>
                    <IconButton size="small">
                        <ArrowForwardIosOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Link to="/NecklaceDiscount"
                        className={location.pathname === "/NecklaceDiscount" ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        NecklaceDiscount
                    </Link>
                </nav>
                <div className="Necklace-Discount container py-5">
                
                    <div className="Necklace-Discount-Section ">
                        <div className="Necklace-Selling-item">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product3.jpg" className="Valentine-Locket-Image"></img>
                        </div>
                        <div className="Selling-item">
                            <h1 className="locket-name">Valentine locket</h1>
                            <div className="Item-Details">
                                <p className="item-price"><span className="main-price">12.06</span> <span className="discount-price">8.00</span></p>
                                <span>(1 customer review)</span>
                                <p className="ReadAndBuy">Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod <br /> lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at <br /> interdum magna augue eget diam.Etiam ultrices. Suspendisse in justo eu magna luctus <br /> suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus.</p>
                                <p className="sm-device-product-details">Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus.</p>
                                <div className="Quantity">
                                    <div className="Count-increase">
                                        <h1>{count}</h1>
                                        <button onClick={() => setCount(count + 1)} className="quantityButton">+</button>
                                        <button type="button" className="Add-to-cart ">Add to cart</button>
                                    </div>
                                    <div>
                                        <h3><span className="category">Category:</span> Necklaces</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Necklace-related-products">
                        <hr className="hr" />
                        <br />
                        <p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus.</p>
                      
                        <div className="flex">
                            <div className="Necklace-related-product-details relative">

                                <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/Jewellery-product8.jpg" className="w-[270px]" alt="..." />
                                <h1 className="text-[17px] mt-2">Emerald Diamond Locket</h1>
                                <span className="font-semibold text-[20px]">$12.25</span>
                                <div>
                                    <button type="button" className="btn ">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NecklaceDiscount
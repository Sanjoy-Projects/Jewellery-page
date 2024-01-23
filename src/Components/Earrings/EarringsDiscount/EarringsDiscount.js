import React from "react";
import './EarringsDiscount.css'
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';


function EarringsDiscount() {
    const location = useLocation();
    const [count, setCount] = useState(0);
    return (
        <>
            <section className="Earrings-Section py-3 px-[20px]">
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
                    <Link to="/Earrings"
                        className={location.pathname === "/Earrings" ? "breadcrumb-active" : "breadcrumb-not-active links"}
                    >
                        Earrings
                    </Link>
                    <IconButton size="small">
                        <ArrowForwardIosOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Link to="/EarringsDiscount"
                        className={location.pathname === "/EarringsDiscount" ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        EarringsDiscount
                    </Link>
                </nav>
                <div className="Earrings-Discount container py-5">
                
                    <div className="Earrings-Discount-Section ">
                        <div className="Earrings-Selling-item">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product.jpg" className="Valentine-Locket-Image"></img>
                        </div>
                        <div className="Selling-item">
                            <h1 className="earrings-name">Infinity Solitaire Studs</h1>
                            <div className="Item-Details">
                                <p className="item-price"><span className="main-price">12.02</span> <span className="discount-price">6.07</span></p>
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
                                        <h3><span className="category">Category:</span> Earrings</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Earrings-related-products">
                        <hr className="hr" />
                        <br />
                        <p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus.</p>
                      
                        <div className="flex">
                            <div className="Earrings-related-product-details relative">

                                <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellery-product4.jpg" className="w-[270px]" alt="..." />
                                <h1 className="text-[17px] mt-2">Ocean Drops Earring</h1>
                                <span className="font-semibold text-[20px]">$13.00</span>
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
export default EarringsDiscount;
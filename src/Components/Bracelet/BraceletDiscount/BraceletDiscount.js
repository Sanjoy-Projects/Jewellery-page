import React from "react";
import './BraceletDiscount.css'
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';


function BraceletDiscount() {
    const location = useLocation();
    const [count, setCount] = useState(0);
    return (
        <>
            <section className="Bracelet-Section py-3 px-[20px]">
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
                    <Link to="/Bracelet"
                        className={location.pathname === "/Bracelet" ? "breadcrumb-active" : "breadcrumb-not-active links"}
                    >
                        Bracelet
                    </Link>
                    <IconButton size="small">
                        <ArrowForwardIosOutlinedIcon fontSize="inherit" />
                    </IconButton>
                    <Link to="/BraceletDiscount"
                        className={location.pathname === "/BraceletDiscount" ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        BraceletDiscount
                    </Link>
                </nav>
                <div className="Barcelet-Discount container py-5">
                
                    <div className="Bracelet-Discount-Section ">
                        <div className="Bracelet-Selling-item">
                            <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/gold-bracelet.jpg" className="Valentine-Locket-Image"></img>
                        </div>
                        <div className="Selling-item">
                            <h1 className="bracelet-name">Stunning Gold Bracelet</h1>
                            <div className="Item-Details">
                                <p className="item-price"><span className="main-price">15.06</span> <span className="discount-price">9.25</span></p>
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
                                        <h3><span className="category">Category:</span> Bracelets</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Bracelet-related-products">
                        <hr className="hr" />
                        <br />
                        <p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus.</p>
                      
                        <div className="flex">
                            <div className="Bracelet-related-product-details relative">

                                <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/modern-bracelet-450x450.jpg" className="w-[270px]" alt="..." />
                                <h1 className="text-[17px] mt-2">Elegant Modern Bracelet</h1>
                                <span className="font-semibold text-[20px]">$15.00</span>
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
export default BraceletDiscount;
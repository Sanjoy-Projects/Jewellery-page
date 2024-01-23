import React from "react";
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
function ContactSection() {
    return (
        <div className="container-footer py-14 px-[20px] w-[100%]">
            <div className="main">
                <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2019/09/jewellary-logo.png" className="footerLogo"></img>
                <div className="services">
                    <div className="ListItems">
                        <p>CUSTOMER SERVICES</p>
                        <ul className="UnorderedListItems">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Track Your Order</a></li>
                            <li><a href="#">Product Care & Repair</a></li>
                            <li><a href="#">Book an Appointment</a></li>
                            <li><a href="#">Frequently Asked Questions</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                        </ul>
                    </div>
                    <div className="ListItems">
                        <p>ABOUT US</p>
                        <ul className="UnorderedListItems">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Our Producers</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="ListItems">
                        <p>CATALOG</p>
                        <ul className="UnorderedListItems">
                            <li><a href="#">Earrings</a></li>
                            <li><a href="#">Necklaces</a></li>
                            <li><a href="#">Bracelets</a></li>
                            <li><a href="#">Rings</a></li>
                            <li><a href="#">Jewellery Box</a></li>
                            <li><a href="#">Studs</a></li>
                        </ul>
                    </div>
                    <div className="ListItems">
                        <p>OUR NEWSLETTER</p>
                        <div className="EmailSection">
                            <h3>Sign up for our latest offers.</h3>
                            <div className="inputSection">
                                <input className="inputBox" placeholder="Email"></input>
                                <button className="emailLoginButton">Send</button>
                            </div>
                            <div className="companyContactIcons">
                                <span> <FacebookOutlinedIcon /></span>
                                <span> <TwitterIcon /></span>
                                <span> <InstagramIcon /></span>
                                <span> <PinterestIcon /></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactSection;
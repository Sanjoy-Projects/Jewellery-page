import React from "react";
import './Home.css'
import Shop from '../Shop/Shop'
import Jwellery from '../Jwellery/Jwellery'
import About from "../About/About";
import Blog from "../Blog/Blog";
import Payment from "../Payment/Payment";

function Home() {
    return (
       <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1621334119886-cbc9e36fcf7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-[100%] image" alt="..." />
                    <div className="carousel-caption d-md-block text-black caption-div py-16">
                        <div className="inner-div">
                            <h2 className="fw-semibold">Pearls Are For Everyone</h2>
                            <p className="carousel-para text-[18px]" >New Collection</p>
                            <button type="button" className="ShopBtn text-center">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="https://images.pexels.com/photos/298852/pexels-photo-298852.jpeg?cs=srgb&dl=pexels-terje-sollie-298852.jpg&fm=jpg" className="d-block w-[100%] image " alt="..." />
                    <div className="carousel-caption d-md-block text-black caption-div py-16">
                        <div className="inner-div">
                            <h2 className="fw-semibold">Modern Jewellery</h2>
                            <p className="carousel-para text-[18px]" >New Collection</p>
                            <button type="button" className="ShopBtn text-center">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src="https://images.unsplash.com/photo-1474169482634-9d0381a70510?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-[100%] image" alt="..." />
                    <div className="carousel-caption d-md-block text-black caption-div py-16">
                        <div className="inner-div">
                            <h2 className="fw-semibold">Exquisite Jewellery</h2>
                            <p className="carousel-para text-[18px]" >New Collection</p>
                            <button type="button" className="ShopBtn text-center">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div>
        <Shop/>
        <Jwellery/>
        <About/>
        <Blog/>
        <Payment/>
        </div>
        </>
    )
}
export default Home;
import React, { useState } from "react";
import './Jwellery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function JwellerySection() {
    const [icon, setIcon] = useState({ firstIcon: false, secondIcon: false, thirdIcon: false, fourthIcon: false, fifthIcon: false, sixthIcon: false, seventhIcon: false, eighthIcon: false });
    let firstIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, firstIcon: !prevIcon.firstIcon }
        })
    }
    let secondIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, secondIcon: !prevIcon.secondIcon }
        })
    }
    let thirdIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, thirdIcon: !prevIcon.thirdIcon }
        })
    }
    let fourthIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, fourthIcon: !prevIcon.fourthIcon }
        })
    }
    let fifthIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, fifthIcon: !prevIcon.fifthIcon }
        })
    }
    let sixthIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, sixthIcon: !prevIcon.sixthIcon }
        })
    }
    let seventhIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, seventhIcon: !prevIcon.seventhIcon }
        })
    }
    let eighthIconToggle = () => {
        setIcon((prevIcon) => {
            return { ...prevIcon, eighthIcon: !prevIcon.eighthIcon }
        })
    }

    let bgColor = { color: "rgb(247, 145, 108)" }
    let Color = { color: "rgb(247, 145, 108)" }
    return (
        <>
            <div className="container-fluid w-[100%] px-[20px] py-14">
                <div className="favouriteJwellery">
                    <h5>DISCOVER OUR</h5>
                    <h1>Jwellery Favourites</h1>
                </div>
                <div className="flex flex-row justify-evenly flex-wrap gap-3 py-7 ">
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1615854430736-c9fae5a95083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGVhcnJpbmdzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text ">Silver and Green Color Earring</p>
                            <div className="AddToCart">
                                <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={firstIconToggle} className="heartIcon">
                                        {
                                            icon.firstIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$12.08</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1543295204-2ae345412549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxnb2xkJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Blue and Gold Ring Set</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={secondIconToggle} className="heartIcon">
                                        {
                                            icon.secondIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$15.05</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1615957579676-d1db3be6effe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM4fHxnb2xkJTIwamV3ZWxsZXJ5fGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Gold and Red Beaded Necklace</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={thirdIconToggle} className="heartIcon">
                                        {
                                            icon.thirdIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$18.02</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1589095053205-8fc842336f4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Silver and Gold Earring</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={fourthIconToggle} className="heartIcon">
                                        {
                                            icon.fourthIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$17.22</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">White Pearl Necklace</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={fifthIconToggle} className="heartIcon">
                                        {
                                            icon.fifthIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$20.00</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1628532732878-6e95f0fb3f02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Blue and Gold Waist Belt</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={sixthIconToggle} className="heartIcon">
                                        {
                                            icon.sixthIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$25.25</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1663079899584-64acea4d6858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Gold and Blue Bracelet</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={seventhIconToggle} className="heartIcon">
                                        {
                                            icon.seventhIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$12.08</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="card w-[18rem]">
                        <img src="https://images.unsplash.com/photo-1623133343364-04d1d1a26fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Gold Earrings</p>
                            <div className="AddToCart">
                            <div className="flex flex-row gap-3">
                                    <span className='text-[17px] icon '><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span onClick={eighthIconToggle} className="heartIcon">
                                        {
                                            icon.eighthIcon ? <i class="fa-solid fa-heart" style={bgColor}></i> : <i class="fa-regular fa-heart" style={Color}></i>
                                        }
                                    </span>
                                </div>
                                <p className="price">$19.20</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JwellerySection;
import React from "react";
import './About.css'

function About() {
    return (
        <>
        <div className="container-fluid-about py-14 ">
            <div className="AboutUs px-[15px] ">
                <div className="GoldRingImage">
                    <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/our-story.jpg"></img>
                </div>
                <div className=" secondColumn">
                    <div className="OurStory">
                        <p>GET TO KNOW US</p>
                        <h1>Our Story</h1>
                    </div>
                    <div className="CompanyStory">
                        <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button type="button" className="btn ">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
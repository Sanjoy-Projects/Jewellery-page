import React from "react";
import './Blog.css';


function BlogSection() {
    return (
        <>
       
        <div className="container-fluid-blog py-[60px] container">
            <div className="BlogHeading">
                <h5>GET INSPIRED</h5>
                <h1>From Our Blog</h1>
            </div>
            <div className="BlogImageSection">
                <div>
                    <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/blog-01.jpg" className="BlogImage"></img>
                    <div className="JwelleryDetails">
                        <p className="JwelleryStyle">Jewellery Styling Tips For You</p>
                        <p className="ManufactoringDate">DECEMBER 2, 2023</p>
                        <button type="button" className="btn ">Read More</button>
                    </div>
                </div>
                <div>
                    <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/blog-02.jpg" className="BlogImage"></img>
                    <div className="JwelleryDetails">
                        <p className="JwelleryStyle">Rock Your Office Look</p>
                        <p className="ManufactoringDate">DECEMBER 2, 2023</p>
                        <button type="button" className="btn ">Read More</button>
                    </div>
                </div>
                <div>
                    <img src="https://ccreadysites.cyberchimps.com/jewellery-shop/wp-content/uploads/sites/153/2021/12/blog-03.jpg" className="BlogImage"></img>
                    <div className="JwelleryDetails">
                        <p className="JwelleryStyle">Jewellery For Every Woman</p>
                        <p className="ManufactoringDate">DECEMBER 2, 2023</p>
                        <button type="button" className="btn ">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogSection;
import React from "react";
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
};

export default Layout;
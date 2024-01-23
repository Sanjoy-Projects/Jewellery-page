import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import{BrowserRouter} from "react-router-dom";
import App from './App';
import Layout from './Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Jwellery from './Components/Jwellery/Jwellery';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Payment from './Components/Payment/Payment';
import Necklace from './Components/Necklace/Necklace';
import Bracelet from './Components/Bracelet/Bracelet';
import Rings from './Components/Rings/Rings';
import Earrings from './Components/Earrings/Earrings';
import NecklaceDiscount from './Components/Necklace/NecklaceDiscountPage/NecklaceDiscount';
import BraceletDiscount from './Components/Bracelet/BraceletDiscount/BraceletDiscount';
import EarringsDiscount from './Components/Earrings/EarringsDiscount/EarringsDiscount';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "shop",
                element: <Shop/>
            },
            {
                path: "jwellery",
                element: <Jwellery/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "return",
                element: <Payment/>
            },
            {
                path: "necklace",
                element: <Necklace/>
            },
            {
                path: "bracelet",
                element: <Bracelet/>
            },
            {
                path: "rings",
                element: <Rings/>
            },
            {
                path: "earrings",
                element: <Earrings/>
            },
            {
                path: "necklacediscount",
                element: <NecklaceDiscount/>
            },
            {
                path: "braceletdiscount",
                element: <BraceletDiscount/>
            },
            {
                path: "earringsdiscount",
                element: <EarringsDiscount/>
            }
            

          
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
   <RouterProvider router={router}/>
);


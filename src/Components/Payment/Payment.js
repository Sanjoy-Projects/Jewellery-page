import React from 'react'
import './Payment.css'
import ReturnIcon from './img/goback.png'
import CreditCardIcon from './img/creditcard.png'
import TrucksIcon from './img/bigTruck.png'

function PaymentSection() {
    return (
        <>
        <div className='container-payment w-[100%] py-14 bg-slate-600'>
            <div className='SecurePayment'>
                <div className='makeYourPayment'>
                    <img src={TrucksIcon} className='Icons'></img>
                    <div className='feedback'>
                        <h4>FREE SHIPPING</h4>
                        <p>Jewellery delivered to your doorstep <br /> with free shipping</p>
                    </div>
                </div>
               <div className='vl'>

               </div>
                <hr/>
                <div className='makeYourPayment'>
                    <img src={ReturnIcon} className='Icons'></img>
                    <div className='feedback'>
                        <h4>15 DAYS RETURN</h4>
                        <p>Don't like jewellery? Return without <br /> any hesitation. 100% money back.</p>
                    </div>
                </div>
                <div className='vl'>

                </div>
                <hr/>
                <div className='makeYourPayment'>
                    <img src={CreditCardIcon} className='Icons'></img>
                    <div className='feedback'>
                        <h4>SECURE PAYMENT</h4>
                        <p>Enjoy shopping with secure <br /> payment.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentSection;
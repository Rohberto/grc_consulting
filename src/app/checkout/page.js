import React from "react";
import Header from '../Components/Header/Header';
import Navigation from "../Components/Billing/Navigation/Navigation";
import CheckoutPage from "../Components/Billing/Checkout/Checkout";
import Footer from '../Components/Footer/Footer';
import gsap from "gsap";
const page = () => {

    return (
        <div>
            <Header />
            <Navigation/>
            <CheckoutPage/>
            <Footer/>
        </div>
    )
}

export default page;
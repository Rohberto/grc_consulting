import React from 'react';
import styles from "./page.module.css";
import Navigation from '../Components/Consulting/Navigation/Navigation';
import Header from '../Components/Header/Header';
import BusinessSolutions from '../Components/Consulting/Solutions/Solutions';
import Choose from '../Components/Consulting/Choose/Choose';
import ContactForm from '../Components/Contact/ContactForm';
import Footer from '../Components/Footer/Footer';
import gsap from 'gsap';
const page = () => {

  return (
    <div>
        <Header/>
        <Navigation/>
        <BusinessSolutions/>
        <Choose/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page;
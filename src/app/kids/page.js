import React from 'react';
import KidsBanner from '../Components/Kids/KidsBanner';
import DigitalDefender from '../Components/Kids/DigitalDefender/DigitalDefender';
import Delivery from '../Components/Kids/Delivery/Delivery';
import Program from '../Components/Kids/Program/Program';
import Statistics from '../Components/Kids/Statistics/Statistics';
import Agent from '../Components/Kids/Agent/Agent';
import ContactForm from '../Components/Kids/Contact/ContactForm';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Kids/Header/Header';

const page = () => {
  return (
    <div>
<Header/>
        <KidsBanner/>
        <DigitalDefender/>
        <Delivery/>
        <Program/>
        <Statistics/>
        <Agent/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page;
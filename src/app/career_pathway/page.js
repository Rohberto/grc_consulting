import React from 'react';
import styles from "./page.module.css"
import Navigation from '../Components/Career_Pathway/Navigation/Navigation';
import Career from '../Components/Career_Pathway/Career/Career';
import Footer from '../Components/Footer/Footer';
import CareerDevelopment from '../Components/Career_Pathway/Career/CareerDevelopment';
import Header from '../Components/Header/Header';
import Popup from '../Components/Career_Pathway/popup';

const page = () => {
 
  return (
    <div className={styles.container}>
      
      <Header/>
        <Navigation/>
        <Career/>
        <CareerDevelopment/>
        <Popup/>
        <Footer/>
    </div>
  )
}

export default page
import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/About/Navigation/Navigation';
import Banner from '../Components/About/Banner/Banner';
import MarqueeSection from '../Components/About/Marquee/Marquee';
import Team from '../Components/About/Team/Team';


const page = () => {

  return (
    <div>
        <Header />
        <Navigation />
        <Banner />
        <MarqueeSection/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default page;
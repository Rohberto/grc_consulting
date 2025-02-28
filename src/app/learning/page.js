import React from 'react'
import Navigation from '../Components/Learning/Navigation/Navigation'
import Header from '../Components/Header/Header'
import Subheader from '../Components/Learning/SubHeader/Subheader'
import Banner from '../Components/Learning/Banner/Banner'
import Footer from '../Components/Footer/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <Navigation/>
        <Subheader/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default page
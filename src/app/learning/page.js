import React from 'react'
import Navigation from '../Components/Learning/Navigation/Navigation'
import Header from '../Components/Header/Header'
import Subheader from '../Components/Learning/SubHeader/Subheader'
import Banner from '../Components/Learning/Banner/Banner'

const page = () => {
  return (
    <div>
        <Header/>
        <Navigation/>
        <Subheader/>
        <Banner/>
    </div>
  )
}

export default page
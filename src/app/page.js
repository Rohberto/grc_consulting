"use client"
import Homepage from "./Components/HomePage/Homepage";
import Services from "./Components/Services/Services";
import Expertise from "./Components/Expertise/Expertise";
import DigitalDefenders from "./Components/Digital/DigitalDefenders";
import GRCTraining from "./Components/GRC/GRCTraining";
import GRCNewsSlider from "./Components/GRCNewsSlider/GRCNewsSlider";
import ContactForm from "./Components/Contact/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";


export default function Home() {


  return (
    <div className="">
      <Header/>
      <Homepage/>
      <Services/>
      <Expertise/>
      <DigitalDefenders/>
      <GRCTraining/>
      <GRCNewsSlider/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

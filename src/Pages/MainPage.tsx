import React from 'react'
import TopSection from '../Components/forMainPage/TopSection/TopSection'
import OurMissionSection from '../Components/forMainPage/OurMissionSection/OurMissionSection'
import SliderProducts from '../Components/forMainPage/SliderProducts/SliderProducts'
import Parallax from '../Components/forMainPage/Parallax/Parallax'
import PartnersSection from '../Components/forMainPage/PartnersSection/PartnersSection'
import StayUpdatedCard from '../Components/forMainPage/StayUpdatedCard/StayUpdatedCard'
import Footer from '../Components/Footer/Footer'

const MainPage: React.FC = () => {
    return (
        <>
          <TopSection/>
          <SliderProducts/>
          <Parallax/>
          <PartnersSection/>
          <OurMissionSection/>
          <StayUpdatedCard/>
          <Footer/>
        </>
    )
}

export default MainPage

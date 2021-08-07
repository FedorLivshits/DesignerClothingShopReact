import React from 'react'
import TopSection from '../Components/TopSection/TopSection'
import OurMissionSection from '../Components/OurMissionSection/OurMissionSection'
import SliderProducts from '../Components/SliderProducts/SliderProducts'
import Parallax from '../Components/Parallax/Parallax'
import PartnersSection from '../Components/PartnersSection/PartnersSection'

const MainPage: React.FC = () => {
    return (
        <>
          <TopSection/>
          <SliderProducts/>
          <Parallax/>
          <PartnersSection/>
          <OurMissionSection/>
        </>
    )
}

export default MainPage

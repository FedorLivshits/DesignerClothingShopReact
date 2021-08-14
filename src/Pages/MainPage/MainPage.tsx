import React from 'react'
import TopSection from './TopSection/TopSection'
import OurMissionSection from './OurMissionSection/OurMissionSection'
import SliderProducts from './SliderProducts/SliderProducts'
import Parallax from './Parallax/Parallax'
import PartnersSection from './PartnersSection/PartnersSection'
import StayUpdatedCard from './StayUpdatedCard/StayUpdatedCard'
import {motion} from 'framer-motion'

const MainPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0 }}>
            <TopSection/>
            <SliderProducts/>
            <Parallax/>
            <PartnersSection/>
            <OurMissionSection/>
            <StayUpdatedCard/>
        </motion.div>
    )
}

export default MainPage

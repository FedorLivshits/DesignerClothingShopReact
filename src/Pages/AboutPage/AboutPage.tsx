import React from 'react'
import styled from 'styled-components'
import TopAboutSection from './TopAboutSectionStyle/TopAboutSection'
import QuoteSection from './QuoteSection/QuoteSection'
import TextBlockComponent from './TextBlockComponent/TextBlockComponent'
import {motion} from 'framer-motion'


export const AboutPageWrapper = styled.div`
    background: black;
    min-height: 100vh;
    display: flex;
	flex-direction: column;
`

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0 }}>
            <AboutPageWrapper>
                <TopAboutSection/>
                <QuoteSection/>
                <TextBlockComponent/>
            </AboutPageWrapper>
        </motion.div>
    )
}

export default AboutPage

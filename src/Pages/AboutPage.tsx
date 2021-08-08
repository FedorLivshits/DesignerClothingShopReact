import React from 'react'
import styled from 'styled-components'
import TopAboutSection from '../Components/forAboutPage/TopAboutSectionStyle/TopAboutSection'
import QuoteSection from '../Components/forAboutPage/QuoteSection/QuoteSection'
import TextBlockComponent from '../Components/forAboutPage/TextBlockComponent/TextBlockComponent'


export const AboutPageWrapper = styled.div`
    background: black;
    min-height: 100vh;
    display: flex;
	flex-direction: column;
`

const AboutPage = () => {
    return (
        <>
            <AboutPageWrapper>
                <TopAboutSection/>
                <QuoteSection/>
                <TextBlockComponent/>
            </AboutPageWrapper>
        </>
    )
}

export default AboutPage

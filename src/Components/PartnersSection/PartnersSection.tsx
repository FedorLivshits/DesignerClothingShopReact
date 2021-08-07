import React from 'react'
import {Container} from '../../GlobalStyle'
import partner1 from '../../assets/img/partner-1.svg'
import partner2 from '../../assets/img/partner-2.svg'
import partner3 from '../../assets/img/partner-3.svg'
import partner4 from '../../assets/img/partner-4.svg'
import partner5 from '../../assets/img/partner-5.svg'
import partner6 from '../../assets/img/partner-6.svg'
import {PartnerLogo, PartnerLogoSpecial, PartnerLogoWrapper, PartnersBrandsInner, Title} from './PartnersSectionStyle'


const PartnersSection: React.FC = () => {
    return (
        <Container>
            <Title>
                Наши друзья
            </Title>
            <PartnersBrandsInner>
                <PartnerLogoWrapper>
                    <PartnerLogo src={partner1}/>
                </PartnerLogoWrapper>
                <PartnerLogoWrapper>
                    <PartnerLogo src={partner2}/>
                </PartnerLogoWrapper>
                <PartnerLogoWrapper>
                    <PartnerLogo src={partner3}/>
                </PartnerLogoWrapper>
                <PartnerLogoWrapper>
                    <PartnerLogoSpecial src={partner4}/>
                </PartnerLogoWrapper>
                <PartnerLogoWrapper>
                    <PartnerLogo src={partner5}/>
                </PartnerLogoWrapper>
                <PartnerLogoWrapper>
                    <PartnerLogo src={partner6}/>
                </PartnerLogoWrapper>
            </PartnersBrandsInner>
        </Container>
    )
}

export default PartnersSection

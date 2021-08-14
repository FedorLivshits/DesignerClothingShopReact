import React from 'react'
import {Container} from '../../../GlobalStyle'
import {
    Button,
    Image,
    MainTitle,
    OurMissionCol,
    OurMissionColGif,
    OurMissionSectionWrapper,
    Row,
    TextCol,
    TitleCol
} from './OurMissionSectionStyle'
import FadeInWhenVisible from '../../../Components/FadeInWhenVisible/FadeInWhenVisible'


const OurMissionSection: React.FC = () => {
    return (
        <Container>
            <OurMissionSectionWrapper>
                <OurMissionColGif>
                    <Image
                        src='https://d3fc22kf489ohb.cloudfront.net/assets/24da5a0cbfd03be1d661f569ca09645cb568bee3/static/media/made-with-love.4c18f611.gif'/>
                    <TitleCol>
                        СДЕЛАНО С ЛЮБОВЬЮ НА НАШЕМ ПРОИЗВОДСТВЕ В ВЕЛИКОБРИТАНИИ
                    </TitleCol>
                </OurMissionColGif>
                <OurMissionCol>
                    <Image
                        src='https://everpress.imgix.net/assets/24da5a0cbfd03be1d661f569ca09645cb568bee3/static/media/mission.20307e52.jpg?w=826&h=1064&auto=format&bg=F7F8F9&fit=fill'/>
                </OurMissionCol>
                <OurMissionCol>
                    <FadeInWhenVisible>
                    <MainTitle>
                        МЫ МЕНЯЕМ САМ СПОСОБ СОЗДАНИЯ ПРОДУКТА
                    </MainTitle>
                    </FadeInWhenVisible>
                    <Row>
                        <OurMissionCol mr>
                            <TitleCol fontBig>
                                МИССИЯ
                            </TitleCol>
                            <TextCol>
                                Наша главная задача привнести больше свободы и креативности в коммерческий мир.
                            </TextCol>
                            <Button to='/about'>
                                Подробнее
                            </Button>
                        </OurMissionCol>
                        <OurMissionCol>
                            <TitleCol fontBig>
                                УСТОЙЧИВОСТЬ
                            </TitleCol>
                            <TextCol>
                                Мы базируемся на открытом коммьюнити, где каждый может создать собственный дизайн и
                                зарабатывать
                                через нашу площадку.
                            </TextCol>
                        </OurMissionCol>
                    </Row>
                </OurMissionCol>
            </OurMissionSectionWrapper>
        </Container>
    )
}
export default OurMissionSection
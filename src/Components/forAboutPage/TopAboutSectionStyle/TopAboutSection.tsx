import React from 'react'
import {Container} from '../../../GlobalStyle'
import {Content, Image, MainTitle, Text, TextInner, TopAboutSectionWrapper} from './TopAboutSectionStyle'

const TopAboutSection: React.FC = () => {
    return (
        <Container>
            <TopAboutSectionWrapper>
                <MainTitle>
                    ПРИВЕТ, <br/>
                    МЫ КОМАНДА EVERPRESS!
                </MainTitle>
                <Content>
                    <TextInner>
                        <Text>
                            Вы попали в место, в котором делают настоящие вещи. Здесь вы найдете тщательно подобранный
                            магазин
                            с оригинальным дизайном продуктов, а также удобными инструментами для производства,
                            продвижения, продажи и распространения
                            вашего творчества.
                        </Text>
                        <Text>
                            Мы считаем, что оригинальность не может процветать там, где отсутствует независимость.
                            Поэтому, наша миссия - предоставить творческую свободу в коммерческом мире.
                        </Text>
                        <Text>
                            Так что давайте начнем.
                        </Text>
                    </TextInner>
                    <Image
                        src='https://d3fc22kf489ohb.cloudfront.net/assets/24da5a0cbfd03be1d661f569ca09645cb568bee3/static/media/hero-1.1cf6b115.jpg'/>
                </Content>
            </TopAboutSectionWrapper>
        </Container>
    )
}

export default TopAboutSection

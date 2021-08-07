import React, {useEffect, useState} from 'react'
import {Container} from '../../../GlobalStyle'
import {SubTitle, Title, TopButton, TopSectionWrapper} from './TopSectionStyle'

const TopSection: React.FC = () => {
    const [bg, setBg] = useState<boolean>(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setBg(!bg)
        }, 4000)
        return () => clearInterval(interval)
    }, [bg])

    return (
        <TopSectionWrapper bg={bg}>
            <Container>
                <Title>
                    НАСТОЯЩИЙ ДИЗАЙН ОТ НАСТОЯЩИХ ХУДОЖНИКОВ ДЛЯ НАСТОЯЩИХ ЛЮДЕЙ
                </Title>
                <SubTitle>
                    Сделайте предварительный заказ на самые свежие дизайны футболок у местных авторов, занимающихся
                    дизайном, музыкой и не только.
                    <TopButton to='/shop'>
                        Перейти в магазин
                    </TopButton>
                </SubTitle>
            </Container>
        </TopSectionWrapper>
    )
}

export default TopSection

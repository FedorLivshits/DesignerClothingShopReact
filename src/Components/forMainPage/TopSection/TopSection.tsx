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
                    СОВРЕМЕННЫЙ ДИЗАЙН ОТ НАСТОЯЩИХ ХУДОЖНИКОВ
                </Title>
                <SubTitle>
                    Сделайте предварительный заказ на самые свежие дизайны футболок у авторов со всех концов света, занимающихся
                    дизайном, музыкой и другим творчеством.
                    <TopButton to='/shop'>
                        Перейти в магазин
                    </TopButton>
                </SubTitle>
            </Container>
        </TopSectionWrapper>
    )
}

export default TopSection

import React from 'react'
import {Container} from '../../../GlobalStyle'
import {SubTitle, Title, TopShopWrapper} from './TopShopSectionStyle'
import {motion} from 'framer-motion'


const TopShopSection = () => {
    return (
        <TopShopWrapper>
            <Container>
                <Title as={motion.h1} initial={{ x: -1000 }}
                       animate={{ x: 0, transition: { duration: 0.4 } }} >
                    АССОРТИМЕНТ
                </Title>
                <SubTitle as={motion.div} initial={{ x: 1000 }}
                          animate={{ x: 0, transition: { duration: 0.4 } }}>
                    Обновление каждую неделю, новые имена дизайнеров и новые лимитированные коллекции
                </SubTitle>
            </Container>
        </TopShopWrapper>
    )
}

export default TopShopSection

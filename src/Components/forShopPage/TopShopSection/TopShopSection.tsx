import React from 'react'
import {Container} from '../../../GlobalStyle'
import {SubTitle, Title, TopShopWrapper} from './TopShopSectionStyle'


const TopShopSection = () => {
    return (
        <TopShopWrapper>
            <Container>
                <Title>
                    АССОРТИМЕНТ
                </Title>
                <SubTitle>
                    Обновление каждую неделю, новые имена дизайнеров и новые лимитированные коллекции
                </SubTitle>
            </Container>
        </TopShopWrapper>
    )
}

export default TopShopSection

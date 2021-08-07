import React from 'react'
import styled from 'styled-components'
import {Container} from '../../GlobalStyle'
import letter from '../../assets/img/letter.svg'
import {Button, Form, Icon, Input, StayUpdatedWrapper, Text} from './StayUpdatedStyle'

const StayUpdatedCard = () => {
    return (
        <Container>
            <StayUpdatedWrapper>
                <Icon src={letter}/>
                <Text>
                    ОСТАВАЙТЕСЬ В КУРСЕ: НОВЫЕ РЕЛИЗЫ, РЕКОМЕНДАЦИИ, ДОПОЛНИТЕЛЬНОЕ СТАТЬИ И МНОГОЕ ДРУГОЕ
                </Text>
                <Form>
                    <Input placeholder="ВАШ EMAIL АДРЕСС">

                    </Input>
                    <Button>
                        ОТПРАВИТЬ
                    </Button>
                </Form>
            </StayUpdatedWrapper>
        </Container>
    )
}

export default StayUpdatedCard

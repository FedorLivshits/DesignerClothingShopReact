import React from 'react'
import {Container} from '../../../GlobalStyle'
import {Author, Image, QuoteSectionInner, Span, Text, TextInner} from './QuoteSectionStyle'

const QuoteSection = () => {
    return (
        <Container>
            <QuoteSectionInner>
                <Image
                    src="https://d3fc22kf489ohb.cloudfront.net/assets/24da5a0cbfd03be1d661f569ca09645cb568bee3/static/media/alex-econs.b8f36c8b.jpg"/>
                <TextInner>
                    <Text>
                        “ <br/>
                        ТВОРЧЕСКОЕ СООБЩЕСТВО ВОСТОЧНОГО ЛОНДОНА С ПЕРВОГО ДНЯ ФОРМИРОВАЛО НАШУ ФИЛОСОФИЮ.
                        ТРАДИЦИОННАЯ РОЗНИЧНАЯ ТОРГОВЛЯ ОСНОВАНА ИСКЛЮЧИТЕЛЬНО НА ПОЛУЧЕНИИ ПРИБЫЛИ, В РЕЗУЛЬТАТЕ ЧЕГО
                        ВЕЩИ ПРЕКРАЩАЮТ БЫТЬ ВЕЩАМИ И СТАНОВЯТСЯ МУСОРОМ. Я ПОНИМАЛ, ЧТО МЫ МОЖЕМ СДЕЛАТЬ ЛУЧШЕ И,
                        КАЖЕТСЯ, У НАС ПОЛУЧИЛОСЬ.
                    </Text>
                    <Author>
                        АЛЕКС ЭКОНС
                    </Author>
                    <Span>
                        Основатель Everpress
                    </Span>
                </TextInner>
            </QuoteSectionInner>
        </Container>
    )
}

export default QuoteSection

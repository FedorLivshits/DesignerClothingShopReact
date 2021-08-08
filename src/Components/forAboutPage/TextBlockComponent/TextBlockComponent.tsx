import React from 'react'
import {Container} from '../../../GlobalStyle'
import {BlockTitle, TextBlockWrapper, TextWrapper, Text} from './TextBlockStyle'

const TextBlockComponent = () => {
    return (
        <>
            <Container>
                <TextBlockWrapper>
                    <BlockTitle>
                        ДЕЛАЕМ ЛУЧШЕ.
                        И БЕЗ ОТХОДОВ.
                    </BlockTitle>
                    <TextWrapper>
                        <Text>
                            Если розничная торговля не изменится, у нас будет еще больше гор мусора, меньше вариантов
                            выбора,
                            меньше оригинальности и низкое качество продукта. Дело не в нас. Речь идет о формировании
                            будущего наилучшим образом.
                        </Text>
                    </TextWrapper>
                </TextBlockWrapper>
            </Container>
        </>
    )
}

export default TextBlockComponent

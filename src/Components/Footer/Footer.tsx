import React from 'react'
import {RouteComponentProps, withRouter } from 'react-router-dom'
import {Container} from '../../GlobalStyle'
import {FooterWrapper, Col, Title, Links, LinkItem, Link, FooterInner} from './FooterStyle'



const FooterComponent: React.FC<RouteComponentProps> = (props) => {
    return (
        <FooterWrapper blackBg={props.location.pathname === '/about'}>
        <Container>
            <FooterInner >
                <Col>
                    <Title>
                        Продавцам
                    </Title>
                    <Links>
                        <LinkItem>
                            <Link>
                                Сделай свой дизайн
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Как это работает
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Рассчитайте расходы
                            </Link>
                        </LinkItem>
                    </Links>
                </Col>
                <Col>
                    <Title>
                        Покупателям
                    </Title>
                    <Links>
                        <LinkItem>
                            <Link>
                                Магазин
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Право потребителя
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Как рассчитывается стоимость
                            </Link>
                        </LinkItem>
                    </Links>
                </Col>
                <Col>
                    <Title>
                        Сообщество
                    </Title>
                    <Links>
                        <LinkItem>
                            <Link>
                                Контакты
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Блог
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                О нас
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Карьера
                            </Link>
                        </LinkItem>
                    </Links>
                </Col>
                <Col>
                    <Title>
                        Соц сети
                    </Title>
                    <Links>
                        <LinkItem>
                            <Link>
                                Instagram
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Facebook
                            </Link>
                        </LinkItem>
                        <LinkItem>
                            <Link>
                                Twitter
                            </Link>
                        </LinkItem>
                    </Links>
                </Col>
            </FooterInner>
        </Container>
        </FooterWrapper>
    )
}
const Footer = withRouter(FooterComponent)

export default Footer

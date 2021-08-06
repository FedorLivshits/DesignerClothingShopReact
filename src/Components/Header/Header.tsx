import React from 'react'
import cartIcon from '../../dbase/img/Cart.svg'
import likeIcon from '../../dbase/img/like.svg'
import logo from '../../dbase/img/logo.svg'
import {Container} from '../../GlobalStyle'
import {
    Header,
    HeaderInner,
    IconImg,
    Link,
    Logo,
    MenuIcons,
    NavMenuItem,
    NavMenuList
} from './HeaderStyle'

const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <Container>
                <HeaderInner>
                    <Link logoLink={'logoLink'}>
                        <Logo src={logo} alt='logo'/>
                    </Link>
                    <NavMenuList>
                        <NavMenuItem>
                            <Link>Магазин</Link>
                        </NavMenuItem>
                    </NavMenuList>
                    <MenuIcons>
                        <Link iconLink={'iconLink'}>
                            <IconImg src={likeIcon} alt='liked'/>
                        </Link>
                        <Link iconLink={'iconLink'}>
                            <IconImg src={cartIcon} alt='cart'/>
                        </Link>
                    </MenuIcons>
                </HeaderInner>
            </Container>
        </Header>
    )
}

export default HeaderComponent

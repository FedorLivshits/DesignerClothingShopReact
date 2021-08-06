import React from 'react'
import cartIcon from '../../dbase/img/Cart.svg'
import likeIcon from '../../dbase/img/like.svg'
import logo from '../../dbase/img/logo.svg'
import {Container} from '../../GlobalStyle'
import {
    HeaderWrapper,
    HeaderInner,
    IconImg,
    Link,
    Logo,
    MenuIcons,
    NavMenuItem,
    NavMenuList
} from './HeaderStyle'

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    <Link logoLink={'logoLink'}>
                        <Logo src={logo} alt='logo'/>
                    </Link>
                    <NavMenuList>
                        <NavMenuItem>
                            <Link>МАГАЗИН</Link>
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
        </HeaderWrapper>
    )
}

export default Header

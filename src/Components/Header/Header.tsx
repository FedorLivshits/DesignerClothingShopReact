import React from 'react'
import cartIcon from '../../assets/img/Cart.svg'
import likeIcon from '../../assets/img/like.svg'
import logo from '../../assets/img/logo.svg'
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
                        <NavMenuItem>
                            <Link>О НАС</Link>
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

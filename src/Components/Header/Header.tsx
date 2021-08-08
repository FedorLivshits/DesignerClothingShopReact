import React from 'react'
import cartIcon from '../../assets/img/Cart.svg'
import likeIcon from '../../assets/img/like.svg'
import logo from '../../assets/img/logo.svg'
import {Container} from '../../GlobalStyle'
import {
    HeaderWrapper,
    HeaderInner,
    IconImg,
    NavLink,
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
                    <NavLink to='/' logolink={'logoLink'}>
                        <Logo src={logo} alt='logo'/>
                    </NavLink>
                    <NavMenuList>
                        <NavMenuItem>
                            <NavLink to='/shop'>МАГАЗИН</NavLink>
                        </NavMenuItem>
                        <NavMenuItem>
                            <NavLink to='/about'>О НАС</NavLink>
                        </NavMenuItem>
                    </NavMenuList>
                    <MenuIcons>
                        <NavLink to='liked' iconlink={'iconLink'}>
                            <IconImg src={likeIcon} alt='liked'/>
                        </NavLink>
                        <NavLink to='cart' iconlink={'iconLink'}>
                            <IconImg src={cartIcon} alt='cart'/>
                        </NavLink>
                    </MenuIcons>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

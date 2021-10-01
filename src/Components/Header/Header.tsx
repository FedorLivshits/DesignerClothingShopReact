import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps, useLocation } from 'react-router-dom'
import cartIcon from '../../assets/img/Cart.svg'
import likeIcon from '../../assets/img/like.svg'
import logo from '../../assets/img/logo.svg'
import { Container } from '../../GlobalStyle'
import { AppStateType } from '../../redux/store'
import {
    HeaderInner, HeaderWrapper, IconImg, Logo,
    MenuIcons, NavLink, NavMenuItem,
    NavMenuList
} from './HeaderStyle'

const Header: React.FC = () => {
    const [likedProductsChanged, setLikedProductsChanged] = useState(false)
    const likedProducts = useSelector((state: AppStateType) => state.mainReducer.liked)
	const { pathname } = useLocation()
    useEffect(() => {
        setLikedProductsChanged(true)
    }, [likedProducts])

    useEffect(() => {
        if (pathname === '/liked') setLikedProductsChanged(false)
    }, [pathname])

    return (
        <HeaderWrapper>
            <Container>
                <HeaderInner>
                    <NavLink to='/' logolink={true}>
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
                        <NavLink to='/liked' iconlink={true} likedchange={likedProductsChanged}>
                            <IconImg src={likeIcon} alt='liked'/>
                        </NavLink>
                        <NavLink to='/cart' iconlink={true}>
                            <IconImg src={cartIcon} alt='cart'/>
                        </NavLink>
                    </MenuIcons>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

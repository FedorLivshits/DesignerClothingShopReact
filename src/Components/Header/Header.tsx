import React, {useEffect, useState} from 'react'
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
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {RouteComponentProps, withRouter} from 'react-router-dom'

const Header: React.FC<RouteComponentProps> = ({location}) => {
    const [likedProductsChanged, setLikedProductsChanged] = useState(false)
    const [cartProductsChanged, setCartProductsChanged] = useState(false)
    const likedProducts = useSelector((state: AppStateType) => state.mainReducer.liked)

    useEffect(() => {
        setLikedProductsChanged(true)
        setCartProductsChanged(true)
    }, [likedProducts])

    useEffect(() => {
        if (location.pathname === '/liked') setLikedProductsChanged(false)
        if (location.pathname === '/cart') setCartProductsChanged(false)

    }, [location.pathname])

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
                        <NavLink to='/liked' iconlink={'iconLink'} likedchange={likedProductsChanged}>
                            <IconImg src={likeIcon} alt='liked'/>
                        </NavLink>
                        <NavLink to='/cart' iconlink={'iconLink'}>
                            <IconImg src={cartIcon} alt='cart'/>
                        </NavLink>
                    </MenuIcons>
                </HeaderInner>
            </Container>
        </HeaderWrapper>
    )
}

export default withRouter(Header)

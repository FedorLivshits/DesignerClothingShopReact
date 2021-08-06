import styled from 'styled-components'

interface LinkProps {
    readonly logoLink?: string
    readonly iconLink?: string
}

export const Header = styled.header`
	background: white;
	width: 100%;
	position: fixed;
	top: 0;
`
export const HeaderInner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 60px;
`
export const Logo = styled.img`
	width: 30px;
`
export const IconImg = styled.img`
	width: 24px;
`
export const NavMenuList = styled.ul``
export const NavMenuItem = styled.li``
export const Link = styled.a<LinkProps>`
	margin-right: ${props => (props.logoLink ? '15px' : '0')};
	padding: ${props => (props.logoLink ? '0' : '10px')};
	border-radius: ${props => (props.iconLink ? '50%' : '5px')};
	&:hover {
		background: ${props => (props.logoLink ? 'white' : '#ebebeb')};
	}
`
export const MenuIcons = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`

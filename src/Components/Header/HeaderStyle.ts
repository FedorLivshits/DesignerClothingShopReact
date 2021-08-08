import styled from 'styled-components'
import {Link} from 'react-router-dom'

interface LinkProps {
    readonly logolink?: string
    readonly iconlink?: string
}

export const HeaderWrapper = styled.header`
    z-index: 100;
	background: white;
	width: 100%;
	position: fixed;
	top: 0;
	border-bottom: 1px solid #bababa;
`
export const HeaderInner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 56px;
`
export const Logo = styled.img`
	width: 30px;
`
export const IconImg = styled.img`
	width: 24px;
`
export const NavMenuList = styled.ul`
    display: flex;
`
export const NavMenuItem = styled.li`
    margin-right: 10px;
`
export const NavLink = styled(Link)<LinkProps>`
    font-size: 10px;
	margin-right: ${props => (props.logolink ? '15px' : '0')};
	padding: ${props => (props.logolink ? '0' : '10px')};
	border-radius: ${props => (props.iconlink ? '50%' : '5px')};
	&:hover {
		background: ${props => (props.iconlink ? 'white' : '#ebebeb')};
	}
`
export const MenuIcons = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`

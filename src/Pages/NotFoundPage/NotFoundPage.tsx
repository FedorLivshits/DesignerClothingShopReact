import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
	height: 100vh;
`
export const NotFoundWrapper = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
`
export const StatusCode = styled.h1`
	font-size: 60px;
`
export const Text = styled.p`
	max-width: 400px;
	margin: 0 auto;
	font-size: 12px;
	line-height: 18px;
	padding-bottom: 20px;
`
export const HomeButton = styled(Link)`
	background: black;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
`

const NotFoundPage = () => {
	return (
		<Wrapper>
			<NotFoundWrapper>
				<StatusCode>404</StatusCode>
				<Text>
					Кажется что-то пошло не так! Страница, которую вы запрашиваете не
					существует. Возможно она устарела, была удалена или вы ввели неверный
					адрес в адресной строке :(
				</Text>
				<HomeButton to={'/'}>Вернуться на главную</HomeButton>
			</NotFoundWrapper>
		</Wrapper>
	)
}

export default NotFoundPage

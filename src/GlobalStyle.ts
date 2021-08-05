import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: "Helvetica-Regular";
    src: url("../src/fonts/HelveticaNeueLTStd-Ex.woff2") format("woff2"),
    url("../src/fonts/HelveticaNeueLTStd-Ex.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

body{
    color: black;
    font-family: "Helvetica-Regular", sans-serif;
    font-size: 14px;
    line-height: 21px;
    overflow-x: hidden;
}
`

export const Container = styled.div`
	width: 100%;
	z-index: 1;
	max-width: 1300px;
	padding: 0 50px;
	margin: 0 auto;

	@media screen and (max-width: 991px) {
		padding: 0 30px;
	}
`

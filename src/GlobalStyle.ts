import styled, {createGlobalStyle} from 'styled-components'

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
    height: 100%;
    font-family: "Helvetica-Regular", sans-serif;
    font-size: 14px;
    color: black;
}
ul{
    list-style: none;
}
a{
    color: inherit;
    cursor: pointer;
}
`

export const Container = styled.div`
	width: 100%;
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
	@media screen and (max-width: 991px) {
		padding: 0 30px;
	}
`

export const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	overflow: auto;
`

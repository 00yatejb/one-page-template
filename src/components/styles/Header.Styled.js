import styled from "styled-components";


//Can pass props from another component to make changes, 
//as done in the example below with bg color from Header.js component
//to do that you must use ${({ prop }) => prop}


export const StyledHeader = styled.header`
    background-color: #fff ; 
    padding: 40px 0;
    margin-left: 40px;
    margin-right: 40px;
    `

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margnin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    width: 130px;
    color: #0C243C;
    margin-left: -40px; 
    
    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-left: 0px;



`
export const LogoName = styled.div`
    color: #0C243C;
    font-size: 50px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin-bottom: 40px;
    }

`

export const Image = styled.img`
    width: 375px; 
    margin-left: 40px;
    margin-top: 40px;
    border-radius: 100px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
        display: none;
        
    }
`



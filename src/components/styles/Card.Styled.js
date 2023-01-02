import styled from "styled-components";


//to row-reverse on odd/even numbers will need to pass layout prop here
//that wass constructed in StyledCard on Card component//


export const StyledCard = styled.div`
    display:flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.35); 
    margin: 40px 20px;
    padding: 60px;
    flex-direction: ${({layout}) => layout || 'row'};

    img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        padding-left: 30px;
        padding-right: 30px;
        @media(max-width: ${({ theme }) => theme.mobile}) {
        display: none;}

    }    

    & > div {
        flex: 1;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`
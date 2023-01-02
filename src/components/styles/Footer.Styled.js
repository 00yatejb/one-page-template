import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.color};
    color: #fff;
    padding: 100px 0 60px;

     img {
        margin-bottom: 20px;
        margin-top: 0;
        width: 20%;
        
    }
    
    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: right;
    }

   

    @media (max-width: ${({ theme }) => theme.mobile}) {
        ul {
            padding: 0;
        }
        p { 
            text-align: center;
        }

        img {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`
import styled from "styled-components";

export const Button = styled.button`
    
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer; 
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    text-decoration: none;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #0C243C;
    color: ${({ color }) => color || '#333'};  

    &:hover { 
        opacity: 0.9;
        transform: scale(0.98);
    }

    a {
        text-decoration: none;
        color: ${({ color }) => color || '#fff'}; 
    }
`
//prop passed in for bg color and color 
//this '||' means 'or'//
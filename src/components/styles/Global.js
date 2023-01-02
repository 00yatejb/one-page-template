import { createGlobalStyle } from "styled-components";

//This styled component is the equivalent of global css//

const GlobalStyles = createGlobalStyle`



    * {
        box-sizing: border-box;

    }
    body {
        font-family: 'Lato', sans-serif;
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Lato', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

    .card {
        background-color: red;
    }
    
`
export default GlobalStyles
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        display: grid;
        place-items: center;
        height: 100vh;
        background-color: ${({theme}) => theme.COLORS.PRIMARY_COLOR}
    }

    body, button{
        font-family: "Montserrat", serif;
        font-size: 16px;
    }

    h2{
        font-size: 30px;
        color:${({ theme }) => theme.COLORS.TEXT_COLOR};
        font-weight: 700;
        letter-spacing: 2px;
    }

    p{
        color:${({ theme }) => theme.COLORS.TEXT_COLOR};
        text-align: center;
    }

    img{
        width:90px;
    }

    button:hover{
     opacity: .7;
     cursor: pointer;  
    }

`;

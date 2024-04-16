import { createGlobalStyle} from "styled-components";

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
    }

    body, button{
        font-family: "Montserrat", serif;
        font-size: 16px;
    }

    h2{
        font-size: 30px;
        color:${({theme}) => theme.COLORS.WHITE};
        font-weight: 700;
        letter-spacing: 2px;
    }

    p{
        color:${({theme}) => theme.COLORS.WHITE};
        text-align: center;
    }

    img{
        width:90px;
    }
`
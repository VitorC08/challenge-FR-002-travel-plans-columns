import styled from "styled-components"

export const Button = styled.button`

width: 200px; 
height: 50px;
color: ${({fontColor}) => fontColor};
background-color: ${({theme}) => theme.COLORS.TEXT_COLOR};
border: none;
border-radius: 5px;
font-weight:700;
font-size:15px;
transition: .3s ease all; 

`

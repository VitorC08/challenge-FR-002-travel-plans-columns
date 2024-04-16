import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.button`

width: 150px; 
height: 40px;
color: ${({fontColor}) => fontColor};
background-color: white;
border: none;
border-radius: 5px;
font-weight:600;
font-size:15px;
transition: .3s ease all; 

`

import styled from "styled-components";

export const Container = styled.div`
width: 350px;
height: 500px;
background-color: ${({color}) => color};
display: flex;
flex-direction: column;
justify-content: space-around;
justify-items:center;
align-items: center;
padding: 20px;
box-shadow: 10px 10px 10px -10px gray;
border-radius: 10px;

flex-basis: 200;
flex-grow: 1;

`
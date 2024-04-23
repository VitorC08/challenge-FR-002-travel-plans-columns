import styled from "styled-components";

export const Container = styled.div`
max-width: 400px;
height: 500px;

background-color: ${({color}) => color};

display: flex;
flex-direction: column;
justify-content: space-around;
justify-items:center;
align-items: center;

padding: 30px;
box-shadow: 10px 10px 10px -10px gray;
border-radius: 10px;

flex-basis: 100;
flex-grow: 1;

transition: .5s ease;

&:hover{
    margin-top: -15px;
}

@media screen and (max-width: 768px) {
    max-width: 90%;

    &:hover{
        margin-top: 0;
    }
}

@media screen and (max-width: 480px) {
    max-width: 100%
    }

`


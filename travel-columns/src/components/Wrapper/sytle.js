import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({color, theme}) => color || theme.COLORS.WHITE};
    width: 100%;
    height: 100vh;

    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

    padding: 10px;

    @media screen and (max-width: 768px) {
    padding: 50px;
    }

    @media screen and (max-width: 480px) {
    padding: 10px;
    }



`
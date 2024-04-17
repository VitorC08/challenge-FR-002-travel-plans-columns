import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({color, theme}) => color || theme.COLORS.WHITE};
    width: 100%;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;

    padding: 10px;



`
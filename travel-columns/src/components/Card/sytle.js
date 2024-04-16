import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({color, theme}) => color || theme.COLORS.WHITE};
    width: 750px;
    height: 500px;

    display: flex;
    justify-content:center;

`
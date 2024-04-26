import styled from "styled-components";

export const ModalWrapper = styled.div`
    background-color:black;
    width:400px;
    height:500px;
    color:white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
    opacity: .88;
    color:${({theme}) => theme.COLORS.TEXT_COLOR};

    > button{
        padding: 12px;
        font-weight: 500;
        border-radius: 5px;
        border: none;
    }
`
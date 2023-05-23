import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    max-width: 328px;
`;

export const Button = styled.button`
    background-color: white;
    border: 0.1px solid #bcbcbc;
    color: #001228;
    width: 118px;
    height: 29px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
`;

export const Content = styled.div`
    display: ${(p) => p.block};
    position: fixed;
    background-color: white;
    height: auto;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    max-height: 600px;
    max-width: 1080px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
`;

import styled from "styled-components";

export const Button = styled.a`
    display: inline-block;
    border: none;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-weight: 700;
    padding: 12px 25px;
    cursor: pointer;
    transition: background-color 250ms linear;

    &:hover {
        background-color: #ff4400;
    }
`;

export const Play = styled.button`
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='179.428' height='179.428' viewBox='0 0 179.428 179.428' fill='%23ffffff'%3E%3Cpath d='M89.714,0a89.714,89.714,0,1,0,89.714,89.714A89.718,89.718,0,0,0,89.714,0ZM56.071,134.571V44.857L145.83,89.714Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: contain;
    opacity: 0.31;
    transition: opacity 250ms linear;

    &:hover {
        opacity: 1;
    }

    @media (min-width: 768px) {
        width: 72px;
        height: 72px;
    }
`;

import styled from "styled-components";

export const PasswordSteps = styled.div`
    font-size: 12px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.grey};

    P {
        margin-bottom: 12px;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const StepsWrap = styled.ul`
    max-width: 336px;
    padding: 0;
    margin: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 14px 6px;

    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;

export const Step = styled.li`
    position: relative;
    padding-left: 20px;

    ${(props) => (props.valid === true ? `color: ${props.theme.colors.green}; font-weight: 700;` : "")}

    &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        left: 5px;
        top: -2px;
        border: solid ${(props) => (props.valid ? props.theme.colors.green : props.theme.colors.grey)};
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
    }
`;

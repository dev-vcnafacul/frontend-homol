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

export const FormField = styled.div`
    position: relative;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${(props) => (props.error ? props.theme.colors.redError : props.theme.colors.grey)};
    color: ${(props) => props.theme.colors.grey};
    font-size: 14px;
    padding: 21px 10px 9px;
    margin-bottom: 25px;
    outline-color: ${(props) => props.theme.colors.orange};

    @media (min-width: 1200px) {
        font-size: 16px;
        padding: 26px 23px 11px;
    }
`;

export const InputLabel = styled.label`
    position: absolute;
    color: ${(props) => props.theme.colors.grey};
    top: 6px;
    left: 11px;
    font-size: 12px;

    @media (min-width: 1200px) {
        top: 9px;
        left: 24px;
    }
`;

export const FormError = styled.p`
    position: absolute;
    color: #ff0000;
    bottom: -14px;
    left: 16px;
`;

export const ToggleVisibility = styled.button`
    position: absolute;
    padding: 0;
    background-color: transparent;
    border: none;
    width: 16px;
    height: 16px;
    right: 18px;
    top: calc(50% - 17px);
    cursor: pointer;
    ${(props) =>
        props.visible
            ? "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.5 512.5'%3E%3Cpath fill='%2395A7BF' d='M511 246c-4-7-94-160-254-160S7 239 3 246c-4 6-4 15 0 21s94 160 254 160 250-154 254-160c2-6 2-15 0-21zM257 363c-60 0-107-47-107-107s47-106 107-106 107 47 107 106-47 107-107 107z'/%3E%3Cpath fill='%2395A7BF' d='M257 192c-36 0-64 28-64 64s28 64 64 64 64-27 64-64-28-64-64-64zm21 64c-12 0-21-8-21-21s9-21 21-21c13 0 22 8 22 21s-9 21-22 21z'/%3E%3C/svg%3E\");"
            : "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 469.4 469.4'%3E%3Cpath fill='%2395A7BF' d='M231 160l67 68 1-4c0-35-29-64-64-64h-4z'/%3E%3Cpath fill='%2395A7BF' d='M235 117a107 107 0 0199 146l62 62c32-26 58-61 73-101A252 252 0 00150 79l46 46c12-5 25-8 39-8zM21 59l49 49 10 10c-36 27-63 64-80 106a252 252 0 00328 142l9 9 62 62 28-27L49 32 21 59zm118 118l33 33-1 14a64 64 0 0078 62l32 33c-14 7-29 12-46 12a107 107 0 01-96-154z'/%3E%3C/svg%3E\");"}
`;

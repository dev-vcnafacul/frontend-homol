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
    appearance: none;
    background-color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px 4px 0 0;
    border: 1px solid ${(props) => (props.error ? props.theme.colors.redError : props.theme.colors.grey)};
    color: ${(props) => props.theme.colors.grey};
    font-size: 14px;
    padding: 21px 10px 9px;
    margin-bottom: 25px;
    outline-color: ${(props) => props.theme.colors.orange};
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 50%;
    background-image: ${(props) =>
        props.arrow
            ? "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+)"
            : "none"};

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
    bottom: 10px;
    left: 16px;
    font-size: 12px;
`;

export const ToggleVisibility = styled.div`
    position: absolute;
    padding: 0;
    background-color: transparent;
    border: none;
    width: 16px;
    height: 16px;
    right: 18px;
    top: calc(50% - 18px);
    cursor: pointer;
    ${(props) =>
        props.visible
            ? "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.5 512.5'%3E%3Cpath fill='%2395A7BF' d='M511 246c-4-7-94-160-254-160S7 239 3 246c-4 6-4 15 0 21s94 160 254 160 250-154 254-160c2-6 2-15 0-21zM257 363c-60 0-107-47-107-107s47-106 107-106 107 47 107 106-47 107-107 107z'/%3E%3Cpath fill='%2395A7BF' d='M257 192c-36 0-64 28-64 64s28 64 64 64 64-27 64-64-28-64-64-64zm21 64c-12 0-21-8-21-21s9-21 21-21c13 0 22 8 22 21s-9 21-22 21z'/%3E%3C/svg%3E\");"
            : "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 469.4 469.4'%3E%3Cpath fill='%2395A7BF' d='M231 160l67 68 1-4c0-35-29-64-64-64h-4z'/%3E%3Cpath fill='%2395A7BF' d='M235 117a107 107 0 0199 146l62 62c32-26 58-61 73-101A252 252 0 00150 79l46 46c12-5 25-8 39-8zM21 59l49 49 10 10c-36 27-63 64-80 106a252 252 0 00328 142l9 9 62 62 28-27L49 32 21 59zm118 118l33 33-1 14a64 64 0 0078 62l32 33c-14 7-29 12-46 12a107 107 0 01-96-154z'/%3E%3C/svg%3E\");"}
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

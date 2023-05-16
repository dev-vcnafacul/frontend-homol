import styled from "styled-components";
import { Button } from "../atoms";

export const SubmitBtn = styled(Button)`
    width: 100%;
    max-height: 34px;
    padding: 10px 0px;
    margin-top: 10px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: ${(props) => {
        if (props.disabled) return props.theme.colors.darkGrey;
        return props.color ?? props.theme.colors.orange;
    }};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};

    &:hover {
        background-color: ${(props) => {
            if (props.disabled) return props.theme.colors.darkGrey;
            return props.color ?? props.theme.colors.orange;
        }};
    }
`;

export const ModalConfimation = styled.div`
    display: ${(p) => p.block};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`;

export const ContentDivConfimation = styled.div`
    position: fixed;
    background-color: white;
    width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    max-height: 600px;
    max-width: 1080px;
`;

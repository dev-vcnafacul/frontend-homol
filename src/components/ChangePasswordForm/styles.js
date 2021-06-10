import styled from "styled-components";
import { Button } from "components/atoms";

export const SubmitButton = styled(Button)`
    width: 100%;
`;
export const Error = styled.p`
    color: ${(props) => props.theme.colors.redError};
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
`;
import styled from "styled-components";
import { Container, SectionTitle } from "styles/common";

export const Wrap = styled.div`
    min-height: calc(100vh - 77px);
    box-sizing: border-box;
    position: relative;
    padding: 50px 0 76px;
    margin-top: 67px;
    @media (min-width: 768px) {
        padding: 60px 0 192px;
    }
    @media (min-width: 1200px) {
        margin-top: 72px;
    }
    .graphism {
        position: absolute;
        &.triangle-green {
            width: 194px;
            height: 194px;
            left: -97px;
            top: -48px;
            transform: rotate(180deg);
        }
        &.triangle-yellow {
            width: 63px;
            height: 63px;
            right: 0;
            bottom: 0;
            transform: rotate(180deg);
        }
        @media (min-width: 768px) {
            &.triangle-green {
                width: 446px;
                height: 446px;
                left: -223px;
                top: -111px;
            }
            &.triangle-yellow {
                width: 135px;
                height: 135px;
            }
        }
    }
`;

export const Content = styled(Container)`
    max-width: 500px;
    margin: 0 auto;
    form.tabDisplayNone {
        display: none;
    }
`;

export const Title = styled(SectionTitle)`
    margin-bottom: 50px;
`;

export const Error = styled.p`
    color: ${(props) => props.theme.colors.redError};
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
`;

import styled from "styled-components";

export const Wrap = styled.div`
    min-height: calc(100vh - 77px);
    box-sizing: border-box;
    position: relative;
    padding: 50px 0 60px;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-content: stretch;

    @media (min-width: 768px) {
        padding: 60px 0 70px;
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

export const Title = styled.div`
    background-color: ${(props) => props.theme.colors.marine};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 64px;

    color: ${(props) => props.theme.colors.white};
    font-size: 24px;
    font-weight: bold;
`;
export const QuestionList = styled.div`
    margin: 24px;
    max-width: 1080px;
    display: flex;
    align-self: center;
    flex-wrap: wrap;
`;
export const Question = styled.div``;

export const Timer = styled.div``;

export const Label = styled.div`
    height: 12px;
    width: 12px;
    margin: 4px 8px 8px 0;
    background-color: ${(props) => props.theme.colors.yellow};
    border-radius: 50%;
`;

export const Legend = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 8px;
    font-size: 12px;
`;

export const QuestionContent = styled.div``;

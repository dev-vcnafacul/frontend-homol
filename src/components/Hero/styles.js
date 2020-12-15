import styled from "styled-components";

export const Link = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.white};
    padding: 10px;
    font-weight: 700;
    margin-right: 14px;
    transition: background-color, color, transform 250ms ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.marine};
        transform: translateX(7px);
    }
`;

export const Slide = styled.div`
    height: 100vh;
    background: ${(props) => props.background};

    .background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 102px;
        height: 100%;
        box-sizing: border-box;

        .content {
            color: ${(props) => props.theme.colors.white};

            .title {
                font-size: 40px;
                margin-bottom: 24px;
                line-height: 50px;
            }

            .subtitle {
                font-size: 16px;
                line-height: 26px;
                margin-bottom: 24px;
            }

            .wrap-links {
                margin-bottom: 18px;
            }
        }

        .wrap-image {
            text-align: center;

            .image {
                height: 324px;
            }
        }
    }

    @media (max-height: 738px) {
        .wrap {
            .wrap-image .image {
                height: 210px;
            }
        }
    }
`;

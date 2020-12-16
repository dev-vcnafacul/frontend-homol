import styled from "styled-components";

export const Link = styled.a`
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.white};
    padding: 10px;
    margin-bottom: 18px;
    font-weight: 700;
    transition: background-color, color, transform 250ms ease-in-out;

    &:not(:last-child) {
        margin-right: 14px;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.marine};
        transform: translateX(7px);
    }

    @media (min-width: 1200px) {
        padding: 12px 28px;
    }
`;

export const Slide = styled.div`
    min-height: 100vh;
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
        min-height: 100vh;
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
        }

        .wrap-image {
            .image {
                display: block;
                height: 324px;
                margin: 0 auto;
            }
        }
    }

    @media (min-width: 768px) {
        min-height: initial;

        .wrap {
            padding-top: 76px;
            min-height: initial;
            flex-direction: row;

            .wrap-image {
                margin: 0 32px 0 21px;
            }
        }
    }

    @media (min-width: 1200px) {
        min-height: 600px;

        .wrap {
            min-height: 600px;
            align-items: flex-end;

            .content {
                max-width: 522px;
                margin-bottom: 116px;

                .title {
                    font-size: 50px;
                    margin-bottom: 6px;
                    line-height: 70px;
                }

                .subtitle {
                    font-size: 20px;
                    line-height: 35px;
                    margin-bottom: 55px;
                }
            }

            .wrap-image {
                margin: 0;

                .image {
                    height: 524px;
                    margin: 0 45px 0 119px;
                }
            }
        }
    }

    @media (max-height: 738px) and (max-width: 768px) {
        .wrap {
            .wrap-image {
                .image {
                    height: 210px;
                }
            }
        }
    }
`;

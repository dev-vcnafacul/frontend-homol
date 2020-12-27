import styled from "styled-components";

export const MobileDropdownDivStyle = styled.div`
    color: #0b2747;
    width: 100%;
    font-size: 18px;
    position: relative;
    display: none;

    @media only screen and (max-width: 1200px) {
        display: block;
        ul.invisible {
            pointer-events: none;
            opacity: 0;
            max-height: 0;
            margin: 0;
            /*display: none;*/
        }
        ul.visible {
            position: absolute;
            font-size: 18px;
            height: 271px;
            width: 100%;
            margin: 0;

            display: flex;
            padding-inline-start: 0;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            background: #ffffff 0% 0% no-repeat padding-box;
            backdrop-filter: blur(47px);
            -webkit-backdrop-filter: blur(47px);

            transition: opacity 500ms linear;
        }
        li {
            list-style-type: none;
        }
    }
`;

export const ChosenMobileItem = styled.div`
    display: inline-block;
    border-bottom: 3px solid #37d6b5;
    margin-bottom: 11px;
    font-weight: bold;
`;

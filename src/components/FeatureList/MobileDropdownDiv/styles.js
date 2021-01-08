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
            background: #f8f8f8;
            backdrop-filter: blur(47px);
            transition: opacity 500ms linear;
        }
        li {
            list-style-type: none;
            cursor: pointer;
        }
    }
`;

export const ChosenMobileItem = styled.div`
    display: inline-block;
    border-bottom: 3px solid #37d6b5;
    margin-bottom: 11px;
    font-weight: bold;
    cursor: pointer;

    &:after {
        content: "";
        border: solid #37d6b5;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 4px;
        margin: 0 10px;
        transition: transform 150ms linear;
        transform: ${(props) => (props.opened ? "translateY(-25%) rotate(-135deg)" : "translateY(-50%) rotate(45deg)")};
        vertical-align: middle;
    }
`;

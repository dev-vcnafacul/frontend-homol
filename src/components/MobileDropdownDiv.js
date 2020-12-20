import React, { useState } from "react";
import styled from "styled-components";
import { CallbackOnClickLi } from "./CallbackHelpers.js";

const MobileDropdownDivStyle = styled.div`
    color: #0b2747;
    width: 100%;
    font-size: 18px;
    position: relative;
    display: none;

    @media only screen and (max-width: 1200px) {
        display: block;
        ul.invisible {
            display: none;
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
        }
        li {
            list-style-type: none;
        }
    }
`;

const ChosenMobileItem = styled.div`
    display: inline-block;
    border-bottom: 3px solid #37d6b5;
    margin-bottom: 11px;
`;

const MobileDropdownDiv = (props) => {
    const [activePositionMobile, setActivePositionMobile] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const items = props.items;
    let apparentItem = null;
    let hiddenItems = [];
    for (var i = 0; i < items.length; i++) {
        if (activePositionMobile == i) {
            apparentItem = (
                <ChosenMobileItem
                    onClick={() => {
                        setShowDropdown(!showDropdown);
                    }}
                >
                    {items[i]}
                </ChosenMobileItem>
            );
        } else {
            hiddenItems.push(
                <CallbackOnClickLi
                    callbackFunctions={[setActivePositionMobile, props.imgCB]}
                    callbackArgs={[i, i]}
                    componentValue={items[i]}
                    className={"normal"}
                ></CallbackOnClickLi>
            );
        }
    }
    return (
        <MobileDropdownDivStyle>
            {apparentItem}
            <ul className={showDropdown ? "visible" : "invisible"}>{hiddenItems}</ul>
        </MobileDropdownDivStyle>
    );
};

export default MobileDropdownDiv;

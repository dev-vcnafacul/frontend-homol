import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CallbackOnClickLi } from "./CallbackHelpers.js";

const UlCompStyle = styled.ul`
    font-size: ${(props) => props.fontSize};
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: space-around;
    align-items: flex-start;
    li {
        white-space: nowrap;
        list-style-type: none;
        color: #0b2747;
        border-bottom: 3px solid transparent;
    }
    li.chosen {
        border-bottom: 3px solid #37d6b5;
        font-weight: bold;
    }
`;

const generateLi = (items, chosenIndex, callBackFunctions) => {
    var CssClass = null;
    var ilItems = [];
    for (var i = 0; i < items.length; i++) {
        if (chosenIndex === i) {
            CssClass = "chosen";
        } else {
            CssClass = "normal";
        }
        ilItems[i] = (
            <CallbackOnClickLi
                callbackFunctions={callBackFunctions}
                callbackArgs={[i, i]}
                componentValue={items[i]}
                className={CssClass}
                key={i}
            ></CallbackOnClickLi>
        );
    }
    return ilItems;
};

const HighlightSelector = (props) => {
    const [listOfElements, setListOfElements] = useState(null);
    const [activePosition, setActivePosition] = useState(0);
    useEffect(() => {
        setListOfElements(generateLi(props.items, activePosition, [setActivePosition, props.imgCB]));
    }, []);
    useEffect(() => {
        setListOfElements(generateLi(props.items, activePosition, [setActivePosition, props.imgCB]));
    }, [activePosition]);
    return (
        <UlCompStyle className={"desktop"} fontSize={props.fontSize} flexDirection={props.flexDirection}>
            {listOfElements}
        </UlCompStyle>
    );
};

export default HighlightSelector;

import React, { useState, useEffect } from "react";
import { CallbackOnClickLi } from "./callbackOnClick.js";
import { UlCompStyle } from "./style.js";

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
        setListOfElements(generateLi(props.items, activePosition, [setActivePosition]));
    }, [props.items, activePosition]);
    return (
        <UlCompStyle className={"desktop"} fontSize={props.fontSize} flexDirection={props.flexDirection}>
            {listOfElements}
        </UlCompStyle>
    );
};

export default HighlightSelector;

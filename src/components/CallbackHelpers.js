import React from "react";

const multipleCB = (listOfCB, listOfArg) => {
    for (var i = 0; i < listOfCB.length; i++) {
        listOfCB[i](listOfArg[i]);
    }
};

export const CallbackOnClickLi = (props) => {
    return (
        <li
            onClick={() => {
                multipleCB(props.callbackFunctions, props.callbackArgs);
            }}
            className={props.className}
        >
            {props.componentValue}
        </li>
    );
};

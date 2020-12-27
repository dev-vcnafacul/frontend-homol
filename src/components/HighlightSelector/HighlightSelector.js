import { useState, useEffect } from "react";
import { UlComponent } from "./styles.js";

const HighlightSelector = (props) => {
    const [listOfElements, setListOfElements] = useState(props.items);
    const [activePosition, setActivePosition] = useState(0);
    useEffect(() => {
        var CssClass = null;
        var ilItems = [];
        props.items.forEach((item, i) => {
            CssClass = activePosition === i ? "chosen" : "normal";
            ilItems[i] = (
                <li
                    onClick={(e) => {
                        const liIndex = parseInt(e.target.getAttribute("index"));
                        const callBacks = props.callBacks
                            ? [setActivePosition, ...props.callBacks]
                            : [setActivePosition];
                        callBacks.forEach((element) => {
                            element(liIndex);
                        });
                    }}
                    index={i}
                    className={CssClass}
                >
                    {item}
                </li>
            );
        });
        setListOfElements(ilItems);
    }, [props.items, activePosition, props.callBacks]);
    return (
        <UlComponent className="desktop" fontSize={props.fontSize} flexDirection={props.flexDirection}>
            {listOfElements}
        </UlComponent>
    );
};

export default HighlightSelector;

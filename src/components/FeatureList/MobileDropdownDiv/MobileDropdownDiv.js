import { useState } from "react";
import { MobileDropdownDivStyle, ChosenMobileItem } from "./styles.js";

const MobileDropdownDiv = (props) => {
    const [activePositionMobile, setActivePositionMobile] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const items = props.items;
    let apparentItem = null;
    let hiddenItems = [];
    for (var i = 0; i < items.length; i++) {
        if (activePositionMobile === i) {
            apparentItem = (
                <ChosenMobileItem
                    opened={showDropdown}
                    onClick={() => {
                        setShowDropdown(!showDropdown);
                    }}
                >
                    {items[i]}
                </ChosenMobileItem>
            );
        } else {
            hiddenItems.push(
                <li
                    onClick={(e) => {
                        const liIndex = parseInt(e.target.getAttribute("index"));
                        const callBacks = props.callBacks
                            ? [setActivePositionMobile, ...props.callBacks]
                            : [setActivePositionMobile];
                        callBacks.forEach((element) => {
                            element(liIndex);
                        });
                        setShowDropdown(!showDropdown);
                    }}
                    key={i}
                    index={i}
                    className="normal"
                >
                    {items[i]}
                </li>
            );
        }
    }
    return (
        <MobileDropdownDivStyle className="mobileDropdown">
            {apparentItem}
            <ul className={`mobileDropdown ${showDropdown ? "visible" : "invisible"}`}>{hiddenItems}</ul>
        </MobileDropdownDivStyle>
    );
};

export default MobileDropdownDiv;

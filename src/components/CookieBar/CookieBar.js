import { useState } from "react";
import { PolicyLink, Bar, ButtonsWrapper, TextWrapper, HeaderText } from "./styles.js";
import { InvertedButton, Button } from "../atoms";

const hiddenCookieBar = () => {
    const cookieBarStatus = window.localStorage.getItem("lgpd_status");
    const cookieUpdatedAt = window.localStorage.getItem("lgpd_updated_at");
    const today = Date.now();

    if (!cookieBarStatus) return false;

    const diffDates = today - parseInt(cookieUpdatedAt);
    const diffDays = Math.floor(diffDates / (1000 * 60 * 60 * 24));
    if (cookieBarStatus === "rejected" && diffDays >= 5) {
        return false;
    }

    return true;
};

const CookieBar = ({ headerText, text, link, acceptText, rejectText }) => {
    let [isInvisible, setIsInvisible] = useState(hiddenCookieBar());

    const setLgpdStatus = (value) => {
        const today = Date.now();
        window.localStorage.setItem("lgpd_status", value);
        window.localStorage.setItem("lgpd_updated_at", today);
        setIsInvisible(true);
    };

    return (
        <Bar invisible={isInvisible}>
            <TextWrapper>
                <HeaderText>{headerText}</HeaderText>
                <p>
                    {text}
                    <span>
                        <PolicyLink target="_blank" href={link}>
                            Política de cookies
                        </PolicyLink>
                    </span>
                    .
                </p>
            </TextWrapper>
            <ButtonsWrapper>
                <InvertedButton onClick={(e) => setLgpdStatus("rejected")}>{rejectText}</InvertedButton>
                <Button onClick={(e) => setLgpdStatus("accepted")}>{acceptText}</Button>
            </ButtonsWrapper>
        </Bar>
    );
};

export default CookieBar;

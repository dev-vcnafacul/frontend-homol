import { useState } from "react";
import { PolicyLink, Bar, ButtonsWrapper, TextWrapper, HeaderText } from "./styles.js";
import { InvertedButton, Button } from "../atoms";

const getLgpdCookieStatus = () => {
    let cookies = document.cookie === "" ? [] : document.cookie.split("; ");
    let lgpd_status = null;
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf("lgpd_status") !== -1) {
            lgpd_status = cookies[i].substring(cookies[i].indexOf("=") + 1);
        }
    }
    return lgpd_status;
};

const setLgpdCookieStatus = (value, age, setcookieBarStatus, setbarClass) => {
    document.cookie = "lgpd_status=" + value + "; max-age=" + age;
    setcookieBarStatus(value);
    setbarClass("invisible");
};

const CookieBar = (props) => {
    let [cookieBarStatus, setcookieBarStatus] = useState(getLgpdCookieStatus());
    let [barClass, setbarClass] = useState(() => {
        if (cookieBarStatus) return "invisible";
        else return "visible";
    });

    return (
        <Bar className={barClass}>
            <TextWrapper>
                <HeaderText>{props.headerText}</HeaderText>
                <p>
                    {props.text}
                    <span>
                        <PolicyLink href={props.link}>Política de cookies</PolicyLink>
                    </span>
                    .
                </p>
            </TextWrapper>
            <ButtonsWrapper>
                <InvertedButton
                    className="reject"
                    onClick={(e) => setLgpdCookieStatus("rejected", 604800, setcookieBarStatus, setbarClass)}
                >
                    {props.rejectText}
                </InvertedButton>
                <Button
                    className="accept"
                    onClick={(e) => setLgpdCookieStatus("accepted", 31536000, setcookieBarStatus, setbarClass)}
                >
                    {props.acceptText}
                </Button>
            </ButtonsWrapper>
        </Bar>
    );
};

export default CookieBar;

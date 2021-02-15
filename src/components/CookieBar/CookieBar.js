import { useState, useEffect } from "react";
import { PolicyLink, Test, ButtonsWrapper, TextWrapper, HeaderText } from "./styles.js";
import { InvertedButton, Button, Play } from "../atoms";

const CookieBar = (props) => {
    return (
        <Test>
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
                <InvertedButton className="reject">{props.rejectText}</InvertedButton>
                <Button className="accept">{props.acceptText}</Button>
            </ButtonsWrapper>
        </Test>
    );
};

export default CookieBar;

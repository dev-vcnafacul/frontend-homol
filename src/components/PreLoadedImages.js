import React, { useState } from "react";
import styled from "styled-components";

const BgImgDiv = styled.div`
    background-image: url("${(props) => props.url}");
    width: 653px;
    height: 320px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 0;
    @media only screen and (max-width: 1200px) {
        width: 100%;
        height: 412px;
        margin: 0;
    }
    &.invisible {
        display: none;
    }
`;

const PreLoadedImages = (props) => {
    const imgs = props.images;
    let imgDivs = [];
    for (var i = 0; i < imgs.length; i++) {
        imgDivs.push(<BgImgDiv url={imgs[i]} className={props.index == i ? "visible" : "invisible"}></BgImgDiv>);
    }
    return <div>{imgDivs}</div>;
};

export default PreLoadedImages;

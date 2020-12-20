import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle, SectionSubtitle } from "./../styles/common.js";
import HighlightSelector from "./HighlightSelector.js";
import MobileDropdownDiv from "./MobileDropdownDiv.js";
import PreLoadedImages from "./PreLoadedImages.js";

const RalewayBold35 = styled(SectionTitle)`
    margin: 0;
    margin-top: 87px;
    @media only screen and (max-width: 1200px) {
        margin-top: 41px;
        padding: 0 20%;
    }
`;

const Montserrat18 = styled(SectionSubtitle)`
    margin: 0;
    font-family: Montserrat;
    margin-top: 12px;
    @media only screen and (max-width: 1200px) {
        padding: 0 11%;
        margin-top: 18px;
    }
`;

const BgTester = styled.div`
    background-color: #f8f8f8;
    width: 1200px;
    height: 715px;
    text-align: center;
    overflow: hidden;
    @media only screen and (max-width: 1200px) {
        width: 100%;
        height: 858px;
    }
`;

const ImgLegend = styled.p`
    margin-top: 24px;    
    font-size: 16px;
    font-family: Montserrat;
    text-align: left;
    color: #707070;
    @media only screen and (max-width: 1200px) {
        margin: 28px 23px 0 23px;
        font-size 14px;
    }
`;

const Wrapper = styled.div`
    margin-top: 58px;
    display: grid;
    font-size: 20px;
    grid-template: 320px 175px / 2fr 353px 1fr 654px 2fr;
    ul.desktop {
        grid-column: 2;
        grid-row: 1;
    }
    div {
        grid-column: 4;
        grid-row: 1;
    }
    p {
        grid-column: 4;
        grid-row: 2;
    }

    @media only screen and (max-width: 1200px) {
        display: flex;
        width: 100%;
        margin: 0;
        flex-direction: column;
        margin-top: 36px;

        ul.desktop {
            display: none;
        }
    }
`;

const FeatureList = () => {
    let items = [
        "Plataforma personalizada para você",
        "Melhores conteúdos pré-vestibular",
        "Suas redações corrigidas",
        "Simulados online",
        "Fórum de dúvidas",
    ];
    const imgs = ["/1.png", "./2.png", "./3.png", "./4.png", "./5.png"];
    let [imageIndex, setImageIndex] = useState(0);
    console.log(typeof setImageIndex); //https://stackoverflow.com/questions/51607043/how-to-lazy-load-the-background-image-inside-the-inline-style-property-react
    return (
        <BgTester>
            <RalewayBold35>O futuro do cursinho popular</RalewayBold35>
            <Montserrat18>Veja tudo o que você terá acesso na nossa plataforma!</Montserrat18>
            <Wrapper>
                <HighlightSelector
                    imgCB={setImageIndex}
                    items={items}
                    className={"desktop"}
                    flexDirection={"column"}
                    fontSize={"20px"}
                ></HighlightSelector>
                <MobileDropdownDiv items={items} imgCB={setImageIndex}></MobileDropdownDiv>
                <PreLoadedImages index={imageIndex} images={imgs}></PreLoadedImages>
                <ImgLegend>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitrLorem ipsum dolor sit amet, consetetur
                    sadipscing elitr
                </ImgLegend>
            </Wrapper>
        </BgTester>
    );
};

export default FeatureList;

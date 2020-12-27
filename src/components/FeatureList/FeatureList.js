import { useState } from "react";
import HighlightSelector from "../HighlightSelector";
import MobileDropdownDiv from "./MobileDropdownDiv";
import { RalewayBold35, Montserrat18, BgTester, Wrapper, BgImgDiv, ImgLegend } from "./styles.js";

const FeatureList = ({ items }) => {
    let titles = items.map((item) => item.title);
    let imgLegends = items.map((item) => item.subtitle);
    let imgs = items.map((item) => item.imageSrc);
    let [imageIndex, setImageIndex] = useState(0);

    return (
        <BgTester>
            <RalewayBold35>O futuro do cursinho popular</RalewayBold35>
            <Montserrat18>Veja tudo o que você terá acesso na nossa plataforma!</Montserrat18>
            <Wrapper>
                <HighlightSelector
                    callBacks={[setImageIndex]}
                    items={titles}
                    className="desktop"
                    flexDirection="column"
                    fontSize="20px"
                ></HighlightSelector>
                <MobileDropdownDiv items={titles} imgCB={setImageIndex} callBacks={[setImageIndex]}></MobileDropdownDiv>
                <BgImgDiv src={imgs[imageIndex]}></BgImgDiv>
                <ImgLegend>{imgLegends[imageIndex]}</ImgLegend>
            </Wrapper>
        </BgTester>
    );
};

export default FeatureList;

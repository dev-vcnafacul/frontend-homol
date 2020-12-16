import TinySlider from "tiny-slider-react";
import { WrapCarousel } from "./styles";

function Carousel({ settings, arrowColor, children }) {
    return (
        <WrapCarousel arrowColor={arrowColor}>
            <TinySlider settings={settings}>{children}</TinySlider>
        </WrapCarousel>
    );
}

export default Carousel;

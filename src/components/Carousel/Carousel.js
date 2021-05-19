import TinySlider from "tiny-slider-react";
import { WrapCarousel } from "./styles";

function Carousel({ settings, arrowColor, children, className }) {
    return (
        <WrapCarousel arrowColor={arrowColor} className={className}>
            <TinySlider settings={settings}>{children}</TinySlider>
        </WrapCarousel>
    );
}

export default Carousel;

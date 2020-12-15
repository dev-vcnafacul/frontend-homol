import TinySlider from "tiny-slider-react";

function Carousel({ settings, children }) {
    return <TinySlider settings={settings}>{children}</TinySlider>;
}

export default Carousel;

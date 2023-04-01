import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import { Content, Image, ImageWrapper, LinkStyed, Slide, Subtitle, TextWrapper, Title, WrapContainer } from "./styles";

function Hero({ slides }) {
    const carouselSettings = {
        lazyload: true,
        navPosition: "bottom",
        controlsPosition: "bottom",
        nav: false,
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        responsive: {
            768: {
                nav: true,
            },
        },
    };

    const backgroundGradients = [
        "linear-gradient(180deg, rgba(11,39,71,0.89) 0%, rgba(0,13,27,0.89) 100%)",
        "linear-gradient(180deg, rgba(218,0,90,0.89) 0%, rgba(172,0,71,0.89) 100%)",
        "linear-gradient(180deg, rgba(55,214,181,0.89) 0%, rgba(39,191,160,0.89) 100%)",
        "linear-gradient(180deg, rgba(140,196,8,0.89) 0%, rgba(15,155,44,0.89) 100%)",
    ];

    const listSlides = slides.map((slide, index) => (
        <Slide key={slide.id} background={backgroundGradients[index % 4]}>
            <WrapContainer>
                <Content>
                    <TextWrapper>
                        <Title className="title">{slide.title}</Title>
                        <Subtitle className="subtitle">{slide.subtitle}</Subtitle>
                    </TextWrapper>
                    {slide.links.map((link) => (
                        <LinkStyed
                            key={link.id}
                            {...(link.internal
                                ? { as: Link, to: link.link }
                                : { href: link.link, target: link.target })}
                        >
                            {link.text}
                        </LinkStyed>
                    ))}
                </Content>
                <ImageWrapper imageDimension={slide.imageDimension} imagePosition={slide.imagePosition}>
                    <Image className="image" src={slide.image} alt={slide.title} />
                </ImageWrapper>
            </WrapContainer>
        </Slide>
    ));

    return (
        <div>
            <Carousel arrowColor="#FFFFFF" settings={carouselSettings}>
                {listSlides}
            </Carousel>
        </div>
    );
}

export default Hero;

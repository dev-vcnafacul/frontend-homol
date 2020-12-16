import Carousel from "../Carousel";

import { Link, Slide, Background, WrapContainer, Content, Title, Subtitle, Image } from "./styles";

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
            <Background className="background" src={slide.background_image} alt={slide.title} />
            <WrapContainer>
                <Content>
                    <Title className="title">{slide.title}</Title>
                    <Subtitle className="subtitle">{slide.subtitle}</Subtitle>
                    {slide.links.map((link) => (
                        <Link key={link.id} href={link.link}>
                            {link.text}
                        </Link>
                    ))}
                </Content>
                <div className="wrap-image">
                    <Image className="image" src={slide.image} alt={slide.title} />
                </div>
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

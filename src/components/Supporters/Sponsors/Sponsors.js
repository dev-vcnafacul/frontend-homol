import { SponsorsCarousel, SponsorImage } from "./styles";

function Sponsors({ sponsors, className }) {
    const sponsorsCarouselActionsSettings = {
        lazyload: true,
        items: 1,
        controls: true,
        nav: false,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 20,
        center: true,
        responsive: {
            560: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 4,
                center: false,
                nav: true,
            },
        },
    };
    return (
        <SponsorsCarousel className={className} arrowColor="gray" settings={sponsorsCarouselActionsSettings}>
            {sponsors.map((sponsor) => {
                return (
                    <SponsorImage href={sponsor.link} target="_blank">
                        <img src={sponsor.image}></img>
                    </SponsorImage>
                );
            })}
        </SponsorsCarousel>
    );
}

export default Sponsors;

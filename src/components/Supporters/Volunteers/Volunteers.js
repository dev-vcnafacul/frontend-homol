import { VolunteersCarousel, Card, CardIcon, CardText } from "./styles";

function Volunteers({ volunteers, className }) {
    const volunteersCarouselActionsSettings = {
        lazyload: true,
        items: 3,
        controls: true,
        nav: false,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 60,
        center: true,
        fixedWidth: 104,
        responsive: {
            560: {
                items: 3,
                fixedWidth: false,
            },
            768: {
                items: 4,
            },
            1024: {
                items: 5,
                nav: true,
            },
        },
    };
    return (
        <VolunteersCarousel className={className} arrowColor="gray" settings={volunteersCarouselActionsSettings}>
            {volunteers.map((volunteer) => {
                return (
                    <Card>
                        <CardIcon src={volunteer.image}></CardIcon>
                        <CardText>{volunteer.name}</CardText>
                    </Card>
                );
            })}
        </VolunteersCarousel>
    );
}

export default Volunteers;

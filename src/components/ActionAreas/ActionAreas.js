import {
    Section,
    FlexContainer,
    ActionAreasTitle,
    ActionAreasSubtitle,
    SectionContent,
    ActionAreasCarousel,
    Card,
    CardTitle,
    CardSubtitle,
} from "./styles";

function ActionAreas({ cardItems, className }) {
    const carouselActionsSettings = {
        lazyload: true,
        items: 1,
        controls: true,
        nav: true,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 20,
        responsive: {
            768: {
                items: 4,
            },
        },
    };

    return (
        <Section className={className}>
            <FlexContainer>
                <SectionContent>
                    <ActionAreasTitle>Veja nossas áreas de ação</ActionAreasTitle>
                    <ActionAreasSubtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</ActionAreasSubtitle>
                </SectionContent>
                <ActionAreasCarousel arrowColor="gray" settings={carouselActionsSettings}>
                    {cardItems.map((cardItem) => {
                        return (
                            <div key={cardItem.title}>
                                <Card>
                                    <CardTitle>{cardItem.title}</CardTitle>
                                    <CardSubtitle>{cardItem.subtitle}</CardSubtitle>
                                </Card>
                            </div>
                        );
                    })}
                </ActionAreasCarousel>
            </FlexContainer>
        </Section>
    );
}

export default ActionAreas;

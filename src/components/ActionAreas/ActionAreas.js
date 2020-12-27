import { useState } from "react";
import HighlightSelector from "../tabSelector/selector.js";
import {
    Section,
    FlexContainer,
    ActionAreasTitle,
    ActionAreasSubtitle,
    SectionContent,
    ActionAreasCarousel,
    Card,
    CardIcon,
    CardTitle,
    CardSubtitle,
} from "./styles";

function ActionAreas({ cardItems, tabItems, className }) {
    let [tabIndex, setTabIndex] = useState(0);
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
            560: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 4,
            },
        },
    };
    console.log(tabIndex);
    return (
        <Section className={className}>
            <FlexContainer>
                <SectionContent>
                    <ActionAreasTitle>Veja nossas áreas de ação</ActionAreasTitle>
                    <ActionAreasSubtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</ActionAreasSubtitle>
                </SectionContent>
                <HighlightSelector items={tabItems} fontSize={"1.5rem"} tabSelected={setTabIndex}></HighlightSelector>
                <ActionAreasCarousel
                    className={tabIndex === 0 ? "tabActive" : "tabDisplayNone"}
                    index={tabIndex}
                    arrowColor="gray"
                    settings={carouselActionsSettings}
                >
                    {cardItems.languages.map((cardItem) => {
                        return (
                            <div key={cardItem.title}>
                                <Card>
                                    <CardIcon alt="languages" src={cardItem.icon}></CardIcon>
                                    <CardTitle>{cardItem.title}</CardTitle>
                                    <CardSubtitle>{cardItem.subtitle}</CardSubtitle>
                                </Card>
                            </div>
                        );
                    })}
                </ActionAreasCarousel>
                <ActionAreasCarousel
                    className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"}
                    index={tabIndex}
                    arrowColor="gray"
                    settings={carouselActionsSettings}
                >
                    {cardItems.humans.map((cardItem) => {
                        return (
                            <div key={cardItem.title}>
                                <Card>
                                    <CardIcon alt="languages" src={cardItem.icon}></CardIcon>
                                    <CardTitle>{cardItem.title}</CardTitle>
                                    <CardSubtitle>{cardItem.subtitle}</CardSubtitle>
                                </Card>
                            </div>
                        );
                    })}
                </ActionAreasCarousel>
                <ActionAreasCarousel
                    className={tabIndex === 2 ? "tabActive" : "tabDisplayNone"}
                    index={tabIndex}
                    arrowColor="gray"
                    settings={carouselActionsSettings}
                >
                    {cardItems.bioexacts.map((cardItem) => {
                        return (
                            <div key={cardItem.title}>
                                <Card>
                                    <CardIcon alt="languages" src={cardItem.icon}></CardIcon>
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
